import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import './App.css'; // You can also add custom styles if needed
function App() {
  return (
      <div className="App">
          <h1 className="text-center my-4">Travel Carousel</h1>
          <Carousel>
              <div>
                  <img src="/HongKong.jpg" alt="Hong Kong" />
                  <p className="legend">Hong Kong</p>
              </div>
              <div>
                  <img src="/Macao.webp" alt="Macao" />
                  <p className="legend">Macao</p>
              </div>
              <div>
                  <img src="/Japan.webp" alt="Japan" />
                  <p className="legend">Japan</p>
              </div>
              <div>
                  <img src="/LasVegas.webp" alt="Las Vegas" />
                  <p className="legend">Las Vegas</p>
              </div>
          </Carousel>
      </div>
  );
}
