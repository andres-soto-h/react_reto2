import React, { Component } from 'react';
import './App.css';

class App extends Component {


  constructor(props) {
    super(props)
    this.state = {
      clicks: 0,
    };
  }

  IncrementItem = () => {
    this.setState({clicks: this.state.clicks + 1});
  }

  DecreaseItem = () => {
    this.setState({clicks: this.state.clicks - 1});
  }

  render() {
    return (
      <div>
        <span className="value">{ this.state.clicks }</span>
        <button id="inc" onClick={this.IncrementItem}>Incrementa</button>
      </div>
    );
  }


}

export default App;
