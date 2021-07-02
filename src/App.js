import './App.scss';
import Home from '../src/pages/home';
import { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}
