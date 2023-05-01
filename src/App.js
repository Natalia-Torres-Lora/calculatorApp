import {
  useState,
  useEffect
} from "react";
import './App.css';

const op = [ "+", "-", "*", "/","."];

function App() {
  const [calc, setCalc] = useState(''); 

  const updateCalc = value => {
    if (value === '0' && calc === ''){
      return;
    }
    if (value === '.' && calc === ''){
      setCalc('0'+ value);
    }
    if( 
      (op.includes(value) && calc === '') || 
      (op.includes(value) && op.includes(calc.slice(-1)))
    
    ){
      return;
    }
    setCalc(calc + value);
  }
  const calculate = () =>{
    if(calc === ''){
      return;
    }
    const expression = calc.trim();
    const res = eval(expression);
        setCalc(res.toString());
  }
  const del = () => {
    setCalc(calc.slice(0, -1));
  };
  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;
      if (/\d/.test(key)) {
        updateCalc(key);
      } else if (op.includes(key)) {
        updateCalc(key);
      } else if (key === "Enter") {
        calculate();
      } else if (key === "Backspace") {
        del();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [calc]);
 
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Calculator</h1>
        <div className="calculator">
          <div className="output">
            <div className="current-value">
              <p> 
                {calc || 0}
              </p>              
            </div>
          </div>
        <div className="row">
          <button onClick={() => setCalc("")}>Clear</button>
          <button onClick={del}>DEL</button>
          <button onClick={ () => updateCalc('+')}>+</button>
        </div>
        <div className="row">
          <button onClick={ () => updateCalc('1')}>1</button>
          <button onClick={ () => updateCalc('2')}>2</button>
          <button onClick={ () => updateCalc('3')}>3</button>
          <button onClick={ () => updateCalc('-')}>-</button>
        </div>
        <div className="row">
          <button onClick={ () => updateCalc('4')}>4</button>
          <button onClick={ () => updateCalc('5')}>5</button>
          <button onClick={ () => updateCalc('6')}>6</button>
          <button onClick={ () => updateCalc('*')}>*</button>
        </div>
        <div className="row">
          <button onClick={ () => updateCalc('7')}>7</button>
          <button onClick={ () => updateCalc('8')}>8</button>
          <button onClick={ () => updateCalc('9')}>9</button>
          <button onClick={ () => updateCalc('/')}>/</button>
        </div>
        <div className="row">
          <button onClick={ () => updateCalc('.')}>.</button>
          <button onClick={ () => updateCalc('0')}>0</button>
          <button onClick= {calculate}>=</button>
        </div>
      </div>
      </header>
    </div>
  );
}

export default App;