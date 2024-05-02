import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Cart from './component/cart';
import Message from './component/message';

function App() {
  const p = [1, 2, 3, 4, 5];
  const [x, setx] = useState([1, 2, 3, 4, 5, 6])
  return (

    <div>
      <Cart name="me" />
      <Cart name="me" />

      {p.map((item, index) => (
        <Cart key={index} name={`this is map -${item}`} />
      ))}
      <h1>{x}</h1>
      <button onClick={() => setx([...x, 1, 2, 3])}>click me</button>
    </div>

  );
}

export default App;
