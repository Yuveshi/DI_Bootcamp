import React, { useState } from 'react';
import Garage from './Garage';

const Car = ({ model }) => {
  const [color, setColor] = useState("red");

  return (
    <div>
      <h1>This car is a {color} {model}</h1>
      <Garage size="small" />
    </div>
  );
};

export default Car;
