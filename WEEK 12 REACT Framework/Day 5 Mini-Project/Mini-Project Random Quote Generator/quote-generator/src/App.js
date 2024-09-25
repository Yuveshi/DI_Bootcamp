import React, { Component } from 'react';
import './App.css';
import { quotes } from "./data/quotes";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      quote: "", 
      author: "", 
      currentIndex: this.generateRandomIndex(quotes.length),
      passedIndexes:[]
    };
  }

  componentDidMount() {
    const randomQuote = quotes[this.state.currentIndex];
    this.setState((state) => ({ 
      quote: randomQuote.quote,
       author: randomQuote.author,
       passedIndexes: [...state.passedIndexes, state.currentIndex]
       }));
  }


  generateRandomIndex = (max) => {
    return Math.floor(Math.random() * max);
  };

  handleClick = () => {
    this.setState((state) => {
      const allIndexes = Array.from({ length: quotes.length }, (_, i) => i);
      let indexesNotPassed = allIndexes.filter((ind) => !state.passedIndexes.includes(ind));
      if (indexesNotPassed.length === 0) {
        indexesNotPassed = [...allIndexes];
      }

      const randomIndex = indexesNotPassed[this.generateRandomIndex
        (indexesNotPassed.length)];
      

      const randomQuote = quotes[randomIndex];
      return {
        currentIndex: state.currentIndex + 1,
        quote: randomQuote.quote,
        author: randomQuote.author,
        passedIndexes: [...state.passedIndexes, randomIndex]
      };
    });
    this.changeBackgroundColor();
  };

  changeBackgroundColor = () => {
    const root = document.querySelector(":root");
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
   root.style.setProperty("--primary-color", "#" + randomColor);
  };

  render() {
    return (
      <div className="box">
        <h1>{this.state.quote}</h1>
        <h2> -{this.state.author}- </h2>
        <div className="button-container">
          <button onClick={this.handleClick}>New Quote</button>
        </div>
      </div>
    );
  }
}

// Removed unused Counter class

export default App;