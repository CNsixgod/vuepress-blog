---
title: getBoundingClientRect.md
date: 2021/10/1
categories:
  - javascript
permalink: /docs/front-end/14a5dad8.html
---

> `getBoundingClientRect`用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置。`getBoundingClientRect`是`DOM`元素到浏览器可视范围的距离（不包含文档卷起的部分）。
>
> - 该函数返回一个`Object`对象，该对象有 6 个属性：`top,lef,right,bottom,width,height`；
> - 这里的 top、left 和 css 中的理解很相似，width、height 是元素自身的宽高;
> - 但是 right，bottom 和 css 中的理解有点不一样。right 是指元素右边界距窗口最左边的距离，bottom 是指元素下边界距窗口最上面的距离

![aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAxNy85LzIwLzc1MTI3YzE5ZWQyZjlhZGZjMDI2YjE2ZjZmOTlkZDVl](https://raw.githubusercontent.com/sixgodsama/tz/main/public/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAxNy85LzIwLzc1MTI3YzE5ZWQyZjlhZGZjMDI2YjE2ZjZmOTlkZDVl.png)

### 获取页面元素位置

```js
const x =
  this.getBoundingClientRect().left + document.documentElement.scrollLeft;

const y = this.getBoundingClientRect().top + document.documentElement.scrollTop;
```

### 判断元素是否在可视区域

```js
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight ||
        document.documentElement.clientHeight) /*or $(window).height() */ &&
    rect.right <=
      (window.innerWidth ||
        document.documentElement.clientWidth) /*or $(window).width() */
  );
}
```

### options 框显示位置

```js
const position =
  window.innerHeight - (ref?.current?.getBoundingClientRect().top || 0);
const openToTop = position < 240;
```

元素偏移区域
offsetWidth (border + padding+width)
offsetHeight (border + padding + height)
offsetLeft (元素距离定位父级左内边线的水平距离)
offsetTop (元素距离定位父级上内边线的垂直距离)
offsetParent (获取元素定位父级，父级加除了 position:inherit|initial|static 之外的定位属性则会得到该父级，否则一直往上找，直到找到有定位的祖先级或 body 为止，如果其父级有 position:inherit 继承并且继承到定位属性，则定位父级也为其父级元素)
firefox 并没有考虑固定定位的问题，在加了固定定位的元素，火狐返回 body，其他浏览器返回 null
在查找元素定位父级的时候，当元素的父级有除了 static,initial,inherit(特殊情况除外)外的定位，则该元素的定位父级，为该父元素，否则会一直往上找，直到找到有除了以上定位的元素或者找到 body 停止
可视区域
clientHeight (padding + height)不包含滚动条部分,也就是说不包含隐藏的部分
clientWidth (padding + width)不包含滚动条部分,也就是说不包含隐藏的部分
clientTop (上边框的 width)
clientLeft (左边框的 width)
滚动区域
scrollwidth (padding + width)包含水平滚动条部分，也就是内容区域的宽度，包含被隐藏的部分
scrollHeight (padding + height)包含垂直滚动条部分，也就是内容区域的高度，包含被隐藏的部分
以上两个属性如果内部有隐藏部分，则它们的值为子元素的 margin + padding + border + (width | height)
scrollLeft (滚动条滚动的水平距离，默认为 0)
scrollTop (滚动条滚动的垂直距离，默认为 0)
浏览器窗口大小
window.innerWidth (浏览器窗口宽度，不包含工具栏，菜单等，仅仅是可视区域 dom 的 width)
window.innerHeight (浏览器窗口高度，不包含工具栏，菜单等，仅仅是可视区域 dom 的 height)
window.outerWidth (浏览器窗口宽度，包含工具栏、菜单等，整个浏览器的 width)
window.outerHeight (浏览器窗口高度，包含工具栏、菜单等,整个浏览器的 height)
IE 有兼容问题，可用 document.documentElement.clientWidth|clientHeight 代替

### 图片懒加载

```html
 <img src="loading.gif" data-src="https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_1280.jpg" alt="">
  <img src="loading.gif" data-src="https://cdn.pixabay.com/photo/2014/08/01/00/08/pier-407252_1280.jpg" alt="">
  <img src="loading.gif" data-src="https://cdn.pixabay.com/photo/2014/12/15/17/16/pier-569314_1280.jpg" alt="">
  <img src="loading.gif" data-src="https://cdn.pixabay.com/photo/2010/12/13/10/09/abstract-2384_1280.jpg" alt="">
  <img src="loading.gif" data-src="https://cdn.pixabay.com/photo/2015/10/24/11/09/drop-of-water-1004250_1280.jpg"
```

```js
var img = document.getElementsByTagName("img");
var n = 0; //存储图片加载到的位置，避免每次都从第一张图片开始遍历
lazyload(); //页面载入完毕加载可是区域内的图片
// 节流函数，保证每200ms触发一次
function throttle(event, time) {
  let timer = null;
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        event.apply(this, args);
      }, time);
    }
  };
}
window.addEventListener("scroll", throttle(lazyload, 200));
function lazyload() {
  //监听页面滚动事件
  var seeHeight = window.innerHeight; //可见区域高度
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //滚动条距离顶部高度
  for (var i = n; i < img.length; i++) {
    console.log(img[i].offsetTop, seeHeight, scrollTop);
    if (img[i].offsetTop - scrollTop < seeHeight) {
      if (img[i].getAttribute("src") == "loading.gif") {
        img[i].src = img[i].getAttribute("data-src");
      }
      n = i + 1;
    }
  }
}
```

## IntersectionObserver

> IntersectionObserver 接口 (从属于 Intersection Observer API) 提供了一种异步观察目标元素与其祖先元素或顶级文档视窗(viewport)交叉状态的方法。祖先元素与视窗(viewport)被称为根(root)。

`Intersection Observer`可以不用监听`scroll`事件，做到元素一可见便调用回调，在回调里面我们来判断元素是否可见。

```js
if (IntersectionObserver) {
  let lazyImageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      let lazyImage = entry.target;
      // 如果元素可见
      if (entry.intersectionRatio > 0) {
        if (lazyImage.getAttribute("src") == "loading.gif") {
          lazyImage.src = lazyImage.getAttribute("data-src");
        }
        lazyImageObserver.unobserve(lazyImage);
      }
    });
  });
  for (let i = 0; i < img.length; i++) {
    lazyImageObserver.observe(img[i]);
  }
}
```
