import {
  useState,
  useRef
} from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };

  function minus(e) {
  	e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };

  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };

  function divide(e) {
    e.preventDefault();
    if(Number(inputRef.current.value) !== 0)
      setResult((result) => result / Number(inputRef.current.value));
  };

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = null
  };

  function resetResult(e) {
    e.preventDefault();
  	setResult(0)
  };

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>
          {result}
        </p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <div class="flex gap-2 mt-4">
          <button onClick={plus}>Add</button>
          <button onClick={minus}>Subtract</button>
          <button onClick={times}>Multiply</button>
          <button onClick={divide} class={result === 0 && 'disabled'}>Divide</button>
          <button onClick={resetInput} class="resetInput">Reset Input</button>
          <button onClick={resetResult} class="resetResult">Reset Result</button>
        </div>
      </form>
    </div>
  );
}

export default App;
