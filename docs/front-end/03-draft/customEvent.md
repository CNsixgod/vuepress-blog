---
title: customEvent
date: 2021/10/1
categories:
  - javascript
permalink: /docs/front-end/5efb1dd5.html
---

```js
event = new CustomEvent(typeArg, customEventInit);
```

> - _typeArg_
>
> 一个表示 event 名字的字符串
>
> - *customEventInit*可选
>
> 一个字典类型参数，有如下字段
>
> - `"detail"`, 可选的默认值是 null 的任意类型数据，是一个与 event 相关的值
> - bubbles 一个布尔值，表示该事件能否冒泡。 来自 [`EventInit`](https://links.jianshu.com/go?to=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FEvent%2FEvent)。注意：测试 chrome 默认为不冒泡。
> - cancelable 一个布尔值，表示该事件是否可以取消。 来自 [`EventInit`](https://links.jianshu.com/go?to=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FEvent%2FEvent)

```js
window.addEventListener("custom", customHandler);
function customHandler(params) {
  // 打印事件对象 在5秒后 出现打印，可以看到我们自定义的参数
  console.log(params);
}
setTimeout(() => {
  // 创建事件对象
  let event = new CustomEvent("Eric", {
    // 这里可直接传入 自定义的事件参数
    detail: {
      height: 100,
      widht: 100,
      rect: 10000,
    },
  });
  // 同样 我们也可以直接在事件对象上绑定 参数
  event.name = "custom-event";
  window.dispatchEvent(event);
}, 5000);
```

## 应用场景

### Modal visible

```ts
class Messager {
  send = (eventName: string, payload: any) => {
    document.dispatchEvent(
      new CustomEvent(eventName, {
        detail: {
          payload: payload,
        },
      })
    );
  };
  receive = (e: any, messageHandler: Function) => {
    if (messageHandler) {
      const payload = e?.detail?.payload;
      messageHandler(payload);
    }
  };
}

// 组件
const handleClick = (key: string) => {
  messager.send(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, {
    form_name: key,
  });
};

useEffect(() => {
  const onReceive = (e: any) => {
    messager.receive(e, (data: any) => {
      setShowFormModal(true);
      setFormName(data?.form_name);
    });
  };
  document.addEventListener(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, onReceive);
  return () => {
    document.removeEventListener(
      MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL,
      onReceive
    );
  };
}, []);
```

Api 调用 Modal

```tsx
export const openModal = (modalData: AddModalData) => {
  if (typeof window === undefined) return;
  window.dispatchEvent(
    new CustomEvent<AddModalData>(ADD_MODAL_EVENT, {
      detail: modalData,
    })
  );
};

export const ModalContainer = () => {
  const [modalMap, setModalMap] = useState<Record<string, AddModalData>>({});

  const removeModal = useCallback((modalId: string) => {
    setModalMap((prev) => {
      const next = { ...prev };
      delete next[modalId];
      return next;
    });
  }, []);

  useEffect(() => {
    const callback = (e: Event) => {
      const event = e as CustomEvent<AddModalData>;
      const id = getRandomId();
      setModalMap((prev) => {
        return { ...prev, [event.detail.id ?? id]: event.detail };
      });
    };
    window.addEventListener(ADD_MODAL_EVENT, callback, false);
    return () => {
      window.removeEventListener(ADD_MODAL_EVENT, callback);
    };
  }, []);

  return <ModalDisplay modalMap={modalMap} removeModal={removeModal} />;
};
```
