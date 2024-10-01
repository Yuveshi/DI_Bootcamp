import React from 'react';
import './Exercise.css'; // Import the CSS file

class Exercise extends React.Component {
  render() {
    const style_header = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };

    return (
      <div>
        <h1 style={style_header}>Hello from Exercise!</h1>
        <p>This is a paragraph in the exercise component.</p>
        <a href="#">This is a link</a>
        <form>
          <input type="text" placeholder="Type something..." />
          <button type="submit">Submit</button>
        </form>
        <img src="https://via.placeholder.com/150" alt="Placeholder" />
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;
