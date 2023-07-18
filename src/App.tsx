import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import chroma from 'chroma-js';

function App() {
  
  const color = chroma('hotpink').desaturate();
  const hexColor = chroma(color._rgb._unclipped).hex();
  

  
  return (
    <div className="App">
      <header style={{background:hexColor}} className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <Button test="bla bla"/>
      </header>
    </div>
  );
}

export default App;
