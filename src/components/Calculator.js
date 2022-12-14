import React from 'react';
import './Calculator.css';

// function to generate digits

const generateDigits = () => {
  const digits = [];

  for (let i = 1; i < 10; i + 1) {
    digits.push(
      <button className="button" type="button" key={i}>{i}</button>,
    );
  }

  return digits;
};

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="display-result">
          <span className="result">0</span>
        </div>

        <div className="buttons">
          <div className="controllers">
            <button className="button" type="button">AC</button>
            <button className="button" type="button">+/-</button>
            <button className="button" type="button">%</button>
            {generateDigits()}
            <button className="extend" type="button">0</button>
            <button className="dot" type="button">.</button>
          </div>

          <div className="operators">
            <button className="operator" type="button">+</button>
            <button className="operator" type="button">x</button>
            <button className="operator" type="button">-</button>
            <button className="operator" type="button">/</button>
            <button className="operator" type="button">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
