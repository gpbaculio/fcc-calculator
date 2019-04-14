import React, { Component } from 'react';
import {
  Result,
  Equals,
  Operator,
  Number,
  Zero,
  Decimal,
  Formula
} from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App d-flex justify-content-center align-items-center'>
        <div className='d-flex calc-container flex-column w-25'>
          <div className='d-flex flex-column'>
            <Formula />
            <Result />
          </div>
          <div className='d-flex text-center'>
            <div className='keys-container d-flex w-50 flex-column'>
              <div className='flex-grow-1 clear d-flex justify-content-center align-items-center'>
                A/C
              </div>
              <div className='d-flex'>
                <Number num={7} />
                <Number num={8} />
              </div>
              <div className='d-flex'>
                <Number num={4} />
                <Number num={5} />
              </div>
              <div className='d-flex'>
                <Number num={1} />
                <Number num={2} />
              </div>
              <Zero />
            </div>
            <div className='d-flex flex-grow-1 flex-column'>
              <Operator operator={'/'} />
              <Number num={9} />
              <Number num={6} />
              <Number num={3} />
              <Decimal />
            </div>
            <div className='d-flex flex-grow-1 flex-column'>
              <Operator operator={'x'} />
              <Operator operator={'-'} />
              <Operator operator={'+'} />
              <Equals />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
