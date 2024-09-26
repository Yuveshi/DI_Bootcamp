import React, { useState } from 'react';

const Events = () => {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const clickMe = () => {
    alert('I was clicked');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      alert(`You entered: ${event.target.value}`);
    }
  };

  const toggleState = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div>
      <button onClick={clickMe}>Click Me</button>
      <input type="text" onKeyDown={handleKeyDown} placeholder="Press Enter" />
      <button onClick={toggleState}>{isToggleOn ? 'ON' : 'OFF'}</button>
    </div>
  );
};

export default Events;
