import React, { Component } from 'react';
import styled from 'styled-components';
import './App.scss';

import AccordionExample from './components/UIComponents/AccordionExample';
import CheckboxExample from './components/UIComponents/CheckboxExample';

const Test = styled.p`
  color: palevioletred;
  text-align: left;
  font-size: 20px;
  margin-left: 20px;
`;

class App extends Component<{}, { init: boolean }> {
  state = { init: true };

  public render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logoSvg} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React <Button>Hello world</Button>
          </a>
        </header> */}
        <Test>Hello</Test>
        <AccordionExample />
        <CheckboxExample />

      </div>
    );
  }
}

export default App;
