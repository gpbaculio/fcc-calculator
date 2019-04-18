import React, { Component } from 'react';
import {
  Result,
  Equal,
  Operator,
  Number,
  Zero,
  Decimal,
  Formula,
  Clear
} from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App d-flex justify-content-center align-items-center'>
        <div className='d-flex calc-container flex-column w-25'>
          <div className='d-flex flex-column'>
            <Formula />
            <Result keyId={'display'} />
          </div>
          <div className='d-flex text-center'>
            <div className='keys-container d-flex w-50 flex-column'>
              <Clear keyId={'clear'} />
              <div className='d-flex'>
                <Number keyId={'seven'} num={7} />
                <Number keyId={'eight'} num={8} />
              </div>
              <div className='d-flex'>
                <Number keyId={'four'} num={4} />
                <Number keyId={'five'} num={5} />
              </div>
              <div className='d-flex'>
                <Number keyId={'one'} num={1} />
                <Number keyId={'two'} num={2} />
              </div>
              <Zero keyId={'zero'} />
            </div>
            <div className='d-flex flex-grow-1 flex-column'>
              <Operator keyId={'divide'} operator={'/'} />
              <Number keyId={'nine'} num={9} />
              <Number keyId={'six'} num={6} />
              <Number keyId={'three'} num={3} />
              <Decimal keyId={'decimal'} />
            </div>
            <div className='d-flex flex-grow-1 flex-column'>
              <Operator keyId={'multiply'} operator={'x'} />
              <Operator keyId={'subtract'} operator={'-'} />
              <Operator keyId={'add'} operator={'+'} />
              <Equal keyId={'equals'} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
