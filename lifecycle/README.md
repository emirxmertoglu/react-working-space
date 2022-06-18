# React Lifecycle

We can handle the component the first time the component is mounted and then when it is unmounted.

```js
useEffect(() => {
  console.log("component mounted");
  return () => {
    console.log("component unmounted");
  };
}, []);
```

We can handle the component everytime the component is updated.

```js
useEffect(() => {
  console.log("component updated");
});
```

Or we can handle the component when the component is updated via a state.

```js
useEffect(() => {
  setCount((count) => count + 1);
  console.log("count increased");
}, [count]);
```
