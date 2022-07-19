---
title: react ssr
categories:
  - react
date: 2022/7/13
permalink: /docs/front-end/09aa6230.html
---

## SSR vs CSR

为什么使用 ssr:

- 首屏加载快
- seo
- ...

## 核心原理

`node server` 接收客户端请求，得到当前的`req url path`,然后在已有的路由表内查找到对应的组件，拿到需要请求的数据，将数据作为 `props` 、`context`或者`store` 形式传入组件，然后基于 `react` 内置的服务端渲染 api `renderToString() or renderToNodeStream()` 把组件渲染为 `html字符串`或者 `stream 流`, 在把最终的 `html` 进行输出前需要将数据注入到浏览器端(注水)，server 输出(response)后浏览器端可以得到数据(脱水)，浏览器开始进行渲染和节点对比，然后执行组件的`componentDidMount` 完成组件内事件绑定和一些交互，浏览器重用了服务端输出的 `html 节点`，整个流程结束。

## 实现

```js
import React from "react";
const Home = () => {
  return (
    <div>
      <div>This is sanyuan</div>
    </div>
  );
};
export default Home;
```

```js
import express from "express";
import { renderToString } from "react-dom/server";
import Home from "./containers/Home";

const app = express();
const content = renderToString(<Home />);
app.get("/", function (req, res) {
  res.send(
    `
    <html>
      <head>
        <title>ssr</title>
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
    </html>
   `
  );
});
app.listen(3001, () => {
  console.log("listen:3001");
});
```

### 同构

按照上面的你将会发现事件绑定失效，因为`react-dom/server`下的`renderToString`并没有做事件相关的处理

how to fix :

> 同构： 一套 React 代码在服务器上运行一遍，到达浏览器又运行一遍。服务端渲染完成页面结构，浏览器端渲染完成事件绑定

如何进行同构： 浏览器去拉取 JS 文件执行，让 JS 代码来控制

```js
// client/index.js
import React from "react";
import ReactDom from "react-dom";
import Home from "../containers/Home";

ReactDom.hydrate(<Home />, document.getElementById("root"));
```

```js
// server/index.js

app.use(express.static("public"));

res.send(
  `
    <html>
      <head>
        <title>ssr</title>
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
      <script src="/index.js"></script>
    </html>
   `
);
```

```js
// webpack

const clientConfig = {
  mode: "development",
  entry: "./src/client/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "index.js",
  },
};
```

### 同构路由

```js
// Routes.js
import React from 'react';
import {Route} from 'react-router-dom'
import Home from './containers/Home';
import Login from './containers/Login'

export default (
  <div>
    <Route path='/' exact component={Home}></Route>
    <Route path='/login' exact component={Login}></Route>
  </div>
)


// client/index.js
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Routes from '../Routes'

const App = () => {
  return (
    <BrowserRouter>
      {Routes}
    </BrowserRouter>
  )
}
ReactDom.hydrate(<App />, document.getElementById('root'))\
```

```js
// server/index.js
import express from "express";
import { render } from "./utils";

const app = express();
app.use(express.static("public"));
//注意这里要换成*来匹配
app.get("*", function (req, res) {
  res.send(render(req));
});

app.listen(3001, () => {
  console.log("listen:3001");
});

// server/utils.js
import Routes from "../Routes";
import { renderToString } from "react-dom/server";
//重要是要用到StaticRouter
import { StaticRouter } from "react-router-dom";
import React from "react";

export const render = (req) => {
  //构建服务端的路由
  const content = renderToString(
    <StaticRouter location={req.path}>{Routes}</StaticRouter>
  );
  return `
    <html>
      <head>
        <title>ssr</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/index.js"></script>
      </body>
    </html>
  `;
};
```

### 同构 Redux

```js
// 客户端
<Provider store={getStore()}>
  <BrowserRouter>
    <React.Fragment>
      {routes.map((route) => (
        <Route {...route} />
      ))}
    </React.Fragment>
  </BrowserRouter>
</Provider>;

// sotre.js
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as homeReducer } from "../containers/Home/store";

const reducer = combineReducers({
  home: homeReducer,
});

const getStore = () => createStore(reducer, applyMiddleware(thunk));

export default getStore;

// 服务端
const content = renderToString(
  <Provider store={store}>
    <StaticRouter location={req.path} context={{}}>
      <React.Fragment>
        {routes.map((route) => (
          <Route {...route} />
        ))}
      </React.Fragment>
    </StaticRouter>
  </Provider>
);
```

> store 一定不能是单例 要是工厂 否则每个用户访问的永远都是同一个 store

### server 获取异步数据

> 服务器端不会执行 componentDidMount

#### 改造 redux

```js
import Home from './containers/Home';
import Login from './containers/Login';

export default [
{
  path: "/",
  component: Home,
  exact: true,
  loadData: Home.loadData,//服务端获取异步数据的函数
  key: 'home'
},
{
  path: '/login',
  component: Login,
  exact: true,
  key: 'login'
}
}];
```

```js
// server
import { matchRoutes } from "react-router-config";
//调用matchRoutes用来匹配当前路由(支持多级路由)
const matchedRoutes = matchRoutes(routes, req.path);
//promise对象数组
const promises = [];
matchedRoutes.forEach((item) => {
  //如果这个路由对应的组件有loadData方法
  if (item.route.loadData) {
    //那么就执行一次,并将store传进去
    //注意loadData函数调用后需要返回Promise对象
    promises.push(item.route.loadData(store));
  }
});
Promise.all(promises).then(() => {
  //此时该有的数据都已经到store里面去了
  //执行渲染的过程(res.send操作)
});
```

#### 注水与脱水

当服务端拿到 store 并获取数据后，客户端的 js 代码又执行一遍，在客户端代码执行的时候又创建了一个空的 store，两个 store 的数据不能同步。

```js
// 注水 在服务端获取获取之后，在返回的html代码中加入这样一个script标签：
<script>
  window.context = {
    state: ${JSON.stringify(store.getState())}
  }
</script>
```

```js
// 脱水
//store/index.js
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as homeReducer } from "../containers/Home/store";

const reducer = combineReducers({
  home: homeReducer,
});
//服务端的store创建函数
export const getStore = () => {
  return createStore(reducer, applyMiddleware(thunk));
};
//客户端的store创建函数
export const getClientStore = () => {
  const defaultState = window.context ? window.context.state : {};
  return createStore(reducer, defaultState, applyMiddleware(thunk));
};
```

### css

```js
npm install -D isomorphic-style-loader
```

```jsx
//webpack.server.js
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const config = require('./webpack.base');

const serverConfig = {
  target: 'node',
  mode: 'development',
  entry: './src/server/index.js',
  externals: [nodeExternals()],
  module: {
    rules: [{
      test: /\.css?$/,
      use: ['isomorphic-style-loader', {
        loader: 'css-loader',
        options: {
          modules: true
        }
      }]
    }]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  }
}

module.exports = merge(config, serverConfig);





。
```

```jsx
let context = { css: [] }

//context从外界传入
<StaticRouter location={req.path} context={context}>
    <div>
        {renderRoutes(routes)}
    </div>
</StaticRouter>


// 组件
componentWillMount() {
  //判断是否为服务端渲染环境
  if (this.props.staticContext) {
    this.props.staticContext.css.push(styles._getCss())
  }
}


const cssStr = context.css.length ? context.css.join('\n') : '';

<style>${cssStr}</style>
```

HOC

```jsx
//withStyle.js
import React, { Component } from 'react';
//函数返回组件
//需要传入的第一个参数是需要装饰的组件
//第二个参数是styles对象
export default (DecoratedComponent, styles) => {
  return class NewComponent extends Component {
    componentWillMount() {
      //判断是否为服务端渲染过程
      if (this.props.staticContext) {
        this.props.staticContext.css.push(styles._getCss())
      }
    }
    render() {
      return <DecoratedComponent {...this.props} />
    }
  }
}

// 组件
import WithStyle from '../../withStyle';
//......
const exportHome = connect(mapStateToProps, mapDispatchToProps)(withStyle(Home, styles));
export default exportHome;
```

### SEO

```js
npm install react-helmet --save
```

```jsx
// client
import { Helmet } from 'react-helmet';

render() {
    return (
      <Fragment>
        <!--Helmet标签中的内容会被放到客户端的head部分-->
        <Helmet>
          <title>xxxx</title>
          <meta name="description" content="xxxx"/>
        </Helmet>
        <div className="test">
            xxx
        </div>
      </Fragment>

    );

```

```jsx
// serve
//server/utils.js
import { renderToString } from 'react-dom/server';
import {  StaticRouter } from 'react-router-dom';
import React from 'react';
import { Provider } from "react-redux";
import { renderRoutes } from 'react-router-config';
import { Helmet } from 'react-helmet';

export const render = (store, routes, req, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>
          {renderRoutes(routes)}
        </div>
      </StaticRouter>
    </Provider>
  );
  //拿到helmet对象，然后在html字符串中引入
  const helmet = Helmet.renderStatic();

  const cssStr = context.css.length ? context.css.join('\n') : '';

  return  `
    <html>
      <head>
        <style>${cssStr}</style>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.context = {
            state: ${JSON.stringify(store.getState())}
          }
        </script>
        <script src="/index.js"></script>
      </body>
    </html>
  `

```
