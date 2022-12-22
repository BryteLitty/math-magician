import { React, useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
const Calculator = () => {
  const [state, setState] = useState({});

  const buttonClicked = (element) => {
    setState((state) => calculate(state, element.target.textContent));
  };

  // function to generate digits
  const generateDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i += 1) {
      digits.push(
        <button className="button" onClick={buttonClicked} type="button" key={i}>{i}</button>,
      );
    }

    return digits;
  };

  const { next, total, operation } = state;
  return (
    <div className="container">
      <div className="display-result">
        <span className="result">{total || total || 0}</span>
        <span className="result">{operation}</span>
        <span className="result">{next}</span>
      </div>

      <div className="buttons">
        <div className="controllers">
          <button className="button" onClick={buttonClicked} type="button">AC</button>
          <button className="button" onClick={buttonClicked} type="button">+/-</button>
          <button className="button" onClick={buttonClicked} type="button">%</button>
          {generateDigits()}
          <button className="extend" onClick={buttonClicked} type="button">0</button>
          <button className="dot" onClick={buttonClicked} type="button">.</button>
        </div>

        <div className="operators">
          <button className="operator" onClick={buttonClicked} type="button">+</button>
          <button className="operator" onClick={buttonClicked} type="button">x</button>
          <button className="operator" onClick={buttonClicked} type="button">-</button>
          <button className="operator" onClick={buttonClicked} type="button">÷</button>
          <button className="operator" onClick={buttonClicked} type="button">=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
