import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="container">
        <button className="button is-danger is-outlined" onClick={() => (alert("Hello!"))}>
         Hello?
        </button>
      </div>
    </div>
  );
}

export default App;
