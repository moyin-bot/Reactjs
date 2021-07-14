/*import logo from './logo.svg';*/
import React from 'react'
import './App.css';

function App() {
 const [inputValue, setInputValue] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const handleIncrement = () => {setCount (prevCount => prevCount + inputValue); 
  };
  const handleDecrement = () => { setCount(prevCount => prevCount - inputValue);
  };


  const handleChangeInInputValue = (event) =>{
    const { value } = event.target;
    console.log({value});
     if(!isNaN(Number(value))){
      setInputValue(Number(value));
    }

  }

  React.useEffect(()=>{
    if(!isNaN(Number(inputValue))){
      setCount(Number(inputValue));
    }
  }, [inputValue]);

  return (
    <React.Fragment>
      <div className="body">
      <header className="App-header">
        <div id="body">
          <button onClick={handleDecrement}>-</button>
          <h5>count is  {count}</h5>
          <button onClick={handleIncrement}>+</button>
        </div>
        <div id="Reset">
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
      <input onChange = {handleChangeInInputValue} value = {inputValue} />
      </header>
      </div>
    </React.Fragment>
  );

}

export default App;
