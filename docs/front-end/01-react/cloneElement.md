---
title: cloneElement
categories:
  - react
date: 2022/7/13
permalink: /docs/front-end/7d73e751.html
---

## React.Children

`React.Children` 提供了用于处理 `props.children` 不透明数据结构的实用方法。

```jsx
React.Children.map(children, function[(thisArg)])
```

在 children 里的每个直接子节点上调用一个函数。如果 children 是一个数组，它将被遍历并为数组中的每个子节点调用该函数。如果子节点为 `null` 或是 `undefined`，则此方法将返回 null 或是 undefined，而不会返回数组。

【注意】
如果 children 是一个 Fragment 对象，它将被视为单一子节点的情况处理，而不会被遍历。

## cloneElement()

```jsx
React.cloneElement(element, [props], [...children]);
```

以 element 元素为样板克隆并返回新的 React 元素。返回元素的 props 是将新的 props 与原始元素的 props 浅层合并后的结果。新的子元素将取代现有的子元素，而来自原始元素的 key 和 ref 将被保留。

React.cloneElement() 几乎等同于：<element.type {...element.props} {...props}>{children}</element.type>

但是，这也保留了组件的 ref。这意味着当通过 ref 获取子节点时，你将不会意外地从你祖先节点上窃取它。相同的 ref 将添加到克隆后的新元素中。
