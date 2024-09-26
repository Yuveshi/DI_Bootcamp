import React from 'react'; 
import Car from './Components/Car';
import Events from './Components/Events';
import Phone from './Components/Phone';
import Color from './Components/Color';

const carinfo = { name: "Ford", model: "Mustang" };

function App() {
  return (
    <div className="App">
      {/* Car Component */}
      <Car model={carinfo.model} />

      {/* Events Component */}
      <Events />

      {/* Phone Component */}
      <Phone />

      {/* Color Component */}
      <Color />
    </div>
  );
}

export default App;
