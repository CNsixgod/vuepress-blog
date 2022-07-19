---
title: 用setTimeout模拟setInterval
tags:
  - handwrite
categories:
  - javascript
date: 2020/7/13
permalink: /docs/front-end-base/515c8ab1.html
---

```javascript
function mySetTimeout(fn, t) {
  let timer = null
  function interval() {
    timer = setTimeout(() => {
      clearTimeout(timer)
      fn()
      interval()
    }, t)
  }
  interval()
  return {
    cancel: () => {
      clearTimeout(timer)
    },
  }
}
let a = mySetTimeout(() => {
  console.log(111)
}, 1000)
setTimeout(() => {
  a.cancel()
}, 5000)
```

> [你不知道的 setInterval](/posts/5a8a6c8d)
