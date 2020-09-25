import React from 'react';
import './App.css';

//illegal things work!

function App() {
  return (
    <div className="App">
      <svg>
          <circle cx="50" cy="50" r="40" stroke="black" stroke-width="1" fill="red"/>
          <rect width="50" height="50" stroke="black" stroke-width="3" fill="red"></rect>
      </svg>
    </div>
  );
}

export default App;
