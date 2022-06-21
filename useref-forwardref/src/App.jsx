import { useRef, forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return <input type="text" ref={ref} {...props} />;
});

function App() {
  const inputFocus = useRef();
  const handleFocus = () => {
    inputFocus.current.focus();
  };

  const componentInputFocus = useRef();
  const handleComponentFocus = () => {
    componentInputFocus.current.focus();
  };

  return (
    <>
      <div>
        <input type="text" ref={inputFocus} placeholder="html input" />
        <button onClick={handleFocus}>Focus on input</button>
      </div>
      <hr />
      <div>
        <Input ref={componentInputFocus} placeholder="input component" />
        <button onClick={handleComponentFocus}>Focus on input component</button>
      </div>
    </>
  );
}

export default App;
