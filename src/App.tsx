import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App d-flex justify-content-center align-items-center'>
        <div className='d-flex calc-container flex-column w-25'>
          <div id='display' className='text-right'>
            result
          </div>
          <div className='d-flex text-center'>
            <div className='keys-container d-flex w-50 flex-column'>
              <div className='flex-grow-1 clear d-flex justify-content-center align-items-center'>
                A/C
              </div>
              <div className='d-flex'>
                <div className='key flex-grow-1 number'>7</div>
                <div className='key flex-grow-1 number'>8</div>
              </div>
              <div className='d-flex'>
                <div className='key flex-grow-1 number'>4</div>
                <div className='key flex-grow-1 number'>5</div>
              </div>
              <div className='d-flex'>
                <div className='key flex-grow-1 number'>1</div>
                <div className='key flex-grow-1 number'>2</div>
              </div>
              <div className='flex-grow-1 p-0 d-flex justify-content-center align-items-center key number'>
                0
              </div>
            </div>
            <div className='d-flex flex-grow-1 flex-column'>
              <div className='key operator'>/</div>
              <div className='key number'>9</div>
              <div className='key number'>6</div>
              <div className='key number'>3</div>
              <div className='key decimal'>.</div>
            </div>
            <div className='d-flex flex-grow-1 flex-column'>
              <div className='key operator '>x</div>
              <div className='key operator '>-</div>
              <div className='key operator '>+</div>
              <div className='key equal flex-grow-1 d-flex justify-content-center align-items-center'>
                =
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
