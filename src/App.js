import React from 'react';
import './App.css';

// let isItEven = (n) => {
//     if (n%2===0) {
//         return true
//     } else {
//         return false
//     }
// }

let isItEven = n => !!(n%2);

console.log(isItEven(15));

function App() {
  return (
    <div className="App">
        bla
    </div>
  );
}

export default App;
