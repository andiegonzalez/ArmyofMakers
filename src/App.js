import React, { Component } from 'react';
import './styles.css';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <Footer />
      </div>

    );
  }
}

export default App;
