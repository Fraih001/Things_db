import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <h1>Things App</h1>
    );
  }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
