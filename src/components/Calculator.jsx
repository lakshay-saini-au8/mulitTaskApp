import React, { useState } from "react";
import { Link } from "react-router-dom";

const Calculator = () => {
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [result, setResult] = useState(0);
  const handelNum1 = (e) => {
    const value = e.target.value;
    setNum1(value);
  };
  const handelNum2 = (e) => {
    const value = e.target.value;
    setNum2(value);
  };
  const add = () => {
    let data = +num1 + +num2;
    data = data ? data : 0;
    setResult(data);
  };
  const subtract = () => {
    let data = +num1 - +num2;
    data = data ? data : 0;
    setResult(data);
  };
  const multiply = () => {
    let data = +num1 * +num2;
    data = data ? data : 0;
    setResult(data);
  };
  const divide = () => {
    let data = +num1 / +num2;
    data = data ? data : 0;
    setResult(data);
  };
  return (
    <div>
      <Link to="/calculator">
        <button>Calculator</button>
      </Link>
      <Link to="/randomdata">
        <button>Random Data</button>
      </Link>
      <Link to="/">
        <button>Home</button>
      </Link>
      <br />
      <br />
      <br />
      <p>
        <h3>Calculator</h3>
      </p>
      <br />
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
      <button onClick={multiply}>Multiply</button>
      <button onClick={divide}>Division</button>
      <div>
        <br />
        <br />
        Enter No.1: <input type="number" value={num1} onChange={handelNum1} />
        <br /> <br />
        Enter No.2: <input type="number" value={num2} onChange={handelNum2} />
        <p>Result: {result}</p>
      </div>
    </div>
  );
};

export default Calculator;
