import React, { useState } from 'react';

const Calculator = () => {
  // State variables for input values and result
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState(null);

  // Function to handle calculation based on the selected operation
  const handleCalculation = () => {
    let res;
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    // Perform the selected operation
    switch (operation) {
      case 'add':
        res = number1 + number2;
        break;
      case 'subtract':
        res = number1 - number2;
        break;
      case 'multiply':
        res = number1 * number2;
        break;
      case 'divide':
        res = number2 !== 0 ? number1 / number2 : 'Cannot divide by zero';
        break;
      default:
        break;
    }
    
    // Update the result state
    setResult(res);
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
      />
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="add">Addition</option>
        <option value="subtract">Subtraction</option>
        <option value="multiply">Multiplication</option>
        <option value="divide">Division</option>
      </select>
      <button onClick={handleCalculation}>Add Them</button>
      {result !== null && <h2>Result: {result}</h2>}
    </div>
  );
};

export default Calculator;
