import React from 'react';
import Calculator from '../components/Calculator';

import './pages.css';

const CalculatorPage = () => (
  <div className="pages-container">
    <div className="sub-container">
      <h1>Let us do some maths!</h1>
      <Calculator />
    </div>
  </div>
);

export default CalculatorPage;
