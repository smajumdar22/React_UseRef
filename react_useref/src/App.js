import React from 'react';
import './App.css';

function App() {
  const formInputRef = React.useRef(null);

  const focusInput = () =>{
    formInputRef.current.focus();
  }
  return (
    <div className="App">
      <p>Lets try useRef</p>
      <input ref={formInputRef} type='text' />
      <button onClick={focusInput}>
       Focus Input
      </button>
    </div>
  );
}

export default App;
