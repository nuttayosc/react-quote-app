import { render } from '@testing-library/react';
import React from'react'
import ReactDom from 'react-dom'
import './App.css';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      quote: null
    };

    this.onQuote = this.onQuote.bind(this)
  }
  
  onQuote() {
    fetch('https://api.quotable.io/random', {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => {
      this.setState({ quote: json.content});

    });
  };

  render(){
    return(
      <div className="App">
      <h1>{this.state.quote}</h1>
      <button onClick={this.onQuote}> Give me a quote</button>
      </div>
    )
  }

}

export default App;
