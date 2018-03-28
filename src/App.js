import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="HelloSofts" />
          
        </header>
        <p className="App-intro">
          <p> Your idea is lived here!</p>
          <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Ffacebook.com%2Fhellosofts&width=450&layout=standard&action=like&size=small&show_faces=true&share=true&height=80&appId=120491201375339" width="450" height="80" className="fblike" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
        </p>
      </div>
    );
  }
}

export default App;
