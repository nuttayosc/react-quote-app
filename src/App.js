import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'
import './App.css';
import rotate from './img/rotate.png';

function App() {
  const [quote, setQuote] = React.useState(null);
  const [author, setAuthor] = React.useState(null);

  async function onQuote (){
    fetch('https://api.quotable.io/random', {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => {
      setQuote(json.content);
      setAuthor(json.author);
    }); 
  }


  React.useEffect (() => {
    onQuote();
  }, []);

 return (
  <div className="App">
  <h1>{quote}</h1>
  <h2>{author}</h2>
  {/* <button onClick={this.onQuote}> Give me a quote</button> */}
  <img 
    src={rotate}
    onClick={onQuote}
    className="rotatebutton"
  ></img>
  </div>
 )
}

/*class App extends React.Component {

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
      this.setState({ author: json.author})
    });
  };

  render(){
    return(
      <div className="App">
      <h1>{this.state.quote}</h1>
      <h2>{this.state.author}</h2>
      {/* <button onClick={this.onQuote}> Give me a quote</button>}
      <img 
        src={rotate}
        onClick={this.onQuote}
        className="rotatebutton"
      ></img>
      </div>
    )
  }
}*/

export default App;
