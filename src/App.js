import React, { Component } from 'react';
import logo from './logo.svg';
import Footer from './components/Footer';
import MainContainer from './components/MainContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
