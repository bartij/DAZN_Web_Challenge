import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import movieDb from 'themoviedb-javascript-library';

movieDb.common.api_key = '73f443fa5350c99236bed025a5030a7d';

class App extends Component {
  componentDidMount(){
    movieDb.search.getKeyword({query: 'fight club'},
      (res) => {
        const movie = JSON.parse(res).results[0];
        console.log({movie})
        movieDb.movies.getById({"id": movie.id }, (response) => {
          console.log(JSON.parse(response))
        }, ()=>{})
      },
      (err) => {console.log({err})})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
