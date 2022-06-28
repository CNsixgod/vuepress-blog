---
title: 用setTimeout模拟setInterval
abbrlink: a72be1b3
date: 2021-02-12T02:19:28.000Z
categories:
  - - javascript
    - handTear
tag: handTear
permalink: /handTear/9d814c91/
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
