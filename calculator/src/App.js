import {
  useState,
  useRef
} from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  //addition function
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
  //substraction function
  function minus(e) { 
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };
  //Multiply Function
  function times(e) { 
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }; 
  //Devide Function 
  function divide(e) { 
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  };
  function resetInput(e) {  
    e.preventDefault();
    inputRef.current.value = "";
  }; 
  function resetResult(e) {  
    e.preventDefault();
    setResult(0);
  }; 
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My Simple Calculator
        </p>
        <form> 
        <p ref={resultRef}> 
          {/* added the value of the current total */}
          {result}
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <div className="calculator">
        <div className="line1">
          <button onClick={resetInput}>Clear</button>
          <button onClick={resetResult}>AC</button>
          <button onClick={plus}>+</button>
        </div>
        <div className="line234">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button onClick={minus}>−</button>
        </div>
        <div className="line234">
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button onClick={times}>×</button>
        </div>
        <div className="line234">
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button onClick={divide}>÷</button>
        </div>
        <div className="line5">
          <button>.</button>
          <button>0</button>
          <button>=</button>
        </div>
        </div>
      </form>
      </header>
    </div>
  );
}

export default App;
