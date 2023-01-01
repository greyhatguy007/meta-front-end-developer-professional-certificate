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
  	// Add the code for the minus function 
    e.preventDefault()
    setResult((result) => {
      return result - Number(inputRef.current.value)
    })
  };
 
  function times(e) { 
    // Add the code for the plus function 
     e.preventDefault()
    setResult((result) => {
      return result * Number(inputRef.current.value)
    })
  }; 
 
  function divide(e) { 
    // Add the code for the divide function 
     e.preventDefault()
    setResult((result) => {
      return result / Number(inputRef.current.value)
    })
  };
 
  function resetInput(e) { 
    // Add the code for the resetInput function 
     e.preventDefault()
    inputRef.current.value = 0
  }; 
 
  function resetResult(e) { 
  	// Add the code for the resetResult function 
     e.preventDefault()
    setResult(0)
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          {/* add the value of the current total */}
          {result}
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button> 
        {/* Add the subtract button */}
         <button onClick={minus}>subtract</button>
        {/* Add the multiply button */}
         <button onClick={times}>multiply</button>
        {/* Add the divide button */}
         <button onClick={divide}>divide</button>
        {/* Add the resetInput button */}
         <button onClick={resetInput}>reset input</button>
        {/* Add the resetResult button */}
         <button onClick={resetResult}>reset result</button>
      </form> 
    </div> 
  ); 
} 
 
export default App; 