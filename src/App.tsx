import React, { Component } from 'react';
import { Result, Equals, Operator, Number, Zero, Decimal } from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App d-flex justify-content-center align-items-center'>
        <div className='d-flex calc-container flex-column w-25'>
          <Result />
          <div className='d-flex text-center'>
            <div className='keys-container d-flex w-50 flex-column'>
              <div className='flex-grow-1 clear d-flex justify-content-center align-items-center'>
                A/C
              </div>
              <div className='d-flex'>
                <Number />
                <Number />
              </div>
              <div className='d-flex'>
                <Number />
                <Number />
              </div>
              <div className='d-flex'>
                <Number />
                <Number />
              </div>
              <Zero />
            </div>
            <div className='d-flex flex-grow-1 flex-column'>
              <Operator />
              <Number />
              <Number />
              <Number />
              <Decimal />
            </div>
            <div className='d-flex flex-grow-1 flex-column'>
              <Operator />
              <Operator />
              <Operator />
              <Equals />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
