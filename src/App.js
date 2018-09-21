import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';
import img5 from './img/img5.jpg';
import img6 from './img/img6.jpg';
import img7 from './img/img7.jpg';
import img8 from './img/img8.jpg';
import img9 from './img/img9.jpg';
import img10 from './img/img10.jpg';
import img11 from './img/img11.jpg';
import img12 from './img/img12.jpg';

var img1Style = {
    backgroundImage: "url(" + { img1 } + ")"
};

var img2Style = {
    backgroundImage: "url(" + { img2 } + ")"
};
var img3Style = {
    backgroundImage: "url(" + { img3 } + ")"
};
var img4Style = {
    backgroundImage: "url(" + { img4 } + ")"
};
var img5Style = {
    backgroundImage: "url(" + { img5 } + ")"
};
var img6Style = {
    backgroundImage: "url(" + { img6 } + ")"
};
var img7Style = {
    backgroundImage: "url(" + { img7 } + ")"
};
var img8Style = {
    backgroundImage: "url(" + { img8 } + ")"
};
var img9Style = {
    backgroundImage: "url(" + { img9 } + ")"
};
var img10Style = {
    backgroundImage: "url(" + { img10 } + ")"
};
var img11Style = {
    backgroundImage: "url(" + { img11 } + ")"
};
var img12Style = {
    backgroundImage: "url(" + { img12 } + ")"
};

class App extends Component {
  render() {
    return (
      <div className="App">
          <nav className="navbar">
              <ul>
                  <li className="brand"><a href="/">Clicky Game</a></li>
                  <li className="">Click an image to begin!</li>
                  <li>Score: 0 | Top Score: 0</li>
              </ul>
          </nav>
          <header className="App-header"><h1 className="App-title">Clicky Game!</h1><h2>Click on an image to earn points, but don't click on any
              more than once!</h2></header>
        {/*<header className="App-header">*/}
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<h1 className="App-title">Welcome to React</h1>*/}

          <main className="container">
              <div role="img" aria-label="click item" className="click-item"
                   style={img1Style}/>
          </main>
          <footer className="footer">
              <div className="bottom">Clicky Game! <img alt="react" src="../public/assets/img/react.svg"/></div>
          </footer>
      </div>
    );
  }
}

export default App;
