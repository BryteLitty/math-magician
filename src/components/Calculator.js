import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  // function to generate digits
  generateDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i += 1) {
      digits.push(
        <button className="button" onClick={this.buttonClicked} type="button" key={i}>{i}</button>,
      );
    }

    return digits;
  };

  buttonClicked(element) {
    this.setState((state) => calculate(state, element.target.textContent));
  }

  render() {
    const { next, total, operation } = this.state;
    return (
      <div className="container">
        <div className="display-result">
          <span className="result">{total || total || 0}</span>
          <span className="result">{operation}</span>
          <span className="result">{next}</span>
        </div>

        <div className="buttons">
          <div className="controllers">
            <button className="button" onClick={this.buttonClicked} type="button">AC</button>
            <button className="button" onClick={this.buttonClicked} type="button">+/-</button>
            <button className="button" onClick={this.buttonClicked} type="button">%</button>
            {this.generateDigits()}
            <button className="extend" onClick={this.buttonClicked} type="button">0</button>
            <button className="dot" onClick={this.buttonClicked} type="button">.</button>
          </div>

          <div className="operators">
            <button className="operator" onClick={this.buttonClicked} type="button">+</button>
            <button className="operator" onClick={this.buttonClicked} type="button">x</button>
            <button className="operator" onClick={this.buttonClicked} type="button">-</button>
            <button className="operator" onClick={this.buttonClicked} type="button">÷</button>
            <button className="operator" onClick={this.buttonClicked} type="button">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
