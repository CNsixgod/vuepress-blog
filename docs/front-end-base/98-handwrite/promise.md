---
title: promise
tags:
  - handwrite
categories:
  - javascript
date: 2020/7/13
permalink: /docs/front-end-base/efed0b8a.html
---

```javascript
(function (window) {
  function MyPromise(cb) {
    this.status = "pending";
    this.data = undefined;
    this.callback = [];
    // 用function 就要用_this  因为普通function函数不会向上寻找this
    const resolve = (value) => {
      if (this.status !== "pending") return;
      this.status = "fulfilled";
      this.data = value;
      // 如果有待执行的callback函数，立即异步执行回调函数onResolved
      //promise.then(function(){
      //   if (trueOrFalse) {
      //     // 同步执行
      //     foo();
      //   } else {
      //     // 异步执行 (如：使用第三方库)
      //      setTimeout(function(){
      //         foo();
      //      })
      //   }
      // });

      // bar();

      setTimeout(() => {
        this.callback.map((cb2) => cb2.onResolved(value));
      });
    };
    const reject = () => {
      if (this.status !== "pending") return;
      this.status = "rejected";
      this.data = value;
      setTimeout(() => {
        this.callback.map((cb2) => cb2.onRejected(value));
      });
    };

    try {
      cb(resolve, reject);
    } catch (error) {
      console.log(123);
      reject(error);
    }
  }

  MyPromise.prototype.then = function (onResolved, onRejected) {
    // 值穿透
    onResolved = typeof onResolved === "function" ? onResolved : (v) => v;
    onRejected =
      typeof onResolved === "function"
        ? onRejected
        : (v) => {
            throw v;
          };
    const _this = this;
    // 链式调用
    return new MyPromise((resolve, reject) => {
      const handle = (cb) => {
        try {
          const result = cb(_this.data);
          if (result instanceof MyPromise) {
            result.then(
              (v) => resolve(v),
              (err) => reject(err)
            );
          } else {
            resolve(result);
          }
        } catch (error) {
          reject(error);
        }
      };
      if (_this.status === "pending") {
        _this.callback.push({
          onResolved: () => {
            handle(onResolved);
          },
          onRejected: () => {
            handle(onRejected);
          },
        });
      } else if (_this.status === "fulfilled") {
        setTimeout(() => {
          handle(onResolved);
        });
      } else {
        setTimeout(() => {
          handle(onRejected);
        });
      }
    });
  };
  MyPromise.prototype.catch = function (onRejected) {
    return this.then(undefined, onRejected);
  };

  MyPromise.resolve = function (value) {
    return new MyPromise((res, rej) => {
      if (value instanceof MyPromise) {
        value.then(
          (v) => res(v),
          (err) => rej(err)
        );
      } else {
        res(v);
      }
    });
  };

  MyPromise.reject = function (value) {
    return new MyPromise((res, rej) => {
      rej(value);
    });
  };

  /*
    Promise函数对象的all方法
    返回一个promise对象，只有当所有promise都成功时返回的promise状态才成功
    */
  MyPromise.all = function (promises) {
    const values = new Array(promises.length);
    var resolvedCount = 0; //计状态为resolved的promise的数量
    return new MyPromise((resolve, reject) => {
      // 遍历promises，获取每个promise的结果
      promises.forEach((p, index) => {
        Promise.resolve(p).then(
          (value) => {
            // p状态为resolved，将值保存起来
            values[index] = value;
            resolvedCount++;
            // 如果全部p都为resolved状态，return的promise状态为resolved
            if (resolvedCount === promises.length) {
              resolve(values);
            }
          },
          (reason) => {
            //只要有一个失败，return的promise状态就为reject
            reject(reason);
          }
        );
      });
    });
  };

  /*
    Promise函数对象的race方法
    返回一个promise对象，状态由第一个完成的promise决定
    */
  MyPromise.race = function (promises) {
    return new MyPromise((resolve, reject) => {
      // 遍历promises，获取每个promise的结果
      promises.forEach((p, index) => {
        Promise.resolve(p).then(
          (value) => {
            // 只要有一个成功，返回的promise的状态九尾resolved
            resolve(value);
          },
          (reason) => {
            //只要有一个失败，return的promise状态就为reject
            reject(reason);
          }
        );
      });
    });
  };

  window.MyPromise = MyPromise;
})(window);
```
