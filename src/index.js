import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import FormVisitenos from './FormVisitenos';
import FormVisitenosBootstrap from './FormVisitenosBootstrap';



import "./index.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <FormVisitenosBootstrap />
        </div>
      </div>
    )
  }
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
