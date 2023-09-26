import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);
  const [history, setHistory] = useState([]);

  function plus(e) {                                                                  //BEST PRACTICES: use e.preventDefault() to prevent the page from reloading
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
    setHistory((history) => [
      ...history,
      `${result} + ${Number(inputRef.current.value)} = ${
        result + Number(inputRef.current.value)
      }`,
    ]);
  }

  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
    setHistory((history) => [
      ...history,
      `${result} - ${Number(inputRef.current.value)} = ${
        result - Number(inputRef.current.value)
      }`,
    ]);
  }

  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
    setHistory((history) => [
      ...history,
      `${result} * ${Number(inputRef.current.value)} = ${
        result * Number(inputRef.current.value)
      }`,
    ]);
  }

  function divide(e) {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
    setHistory((history) => [
      ...history,
      `${result} / ${Number(inputRef.current.value)} = ${
        result / Number(inputRef.current.value)
      }`,
    ]);
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = 0;
  }

  function resetResult(e) {
    e.preventDefault();
    setResult((preVal) => preVal * 0);
  }

  return (
    <div className="App">
      <div>
        <h1>Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>{result}</p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={plus}>add</button>
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset result</button>
      </form>
      <div>
        <h2>History</h2>
        <ul>
          {history.map((calculation, index) => (
            <li key={index}>{calculation}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
