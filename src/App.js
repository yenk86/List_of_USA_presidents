import logo from './logo.svg';
import './App.css';
import Obama from "./presidents/Obama";
import Trump from "./presidents/Trump";
import Biden from "./presidents/Biden";
import Bush from "./presidents/Bush";
import Bill from "./presidents/Bill";
import React from "react";


function App() {
  return (
    <div className="App">
     {/*  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h3>The Last five presidents of United States of America</h3>
        <br />
        <br />
      <Bill />
      <Bush/>
      <Obama />
        <Trump />
        <Biden />
    </div>
  );
}

export default App;
