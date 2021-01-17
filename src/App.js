import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import ControlComponent from './components/ControlComponent';
import RobotFeedComponent from './components/RobotFeedComponent';
import { useState} from 'react';
import {RobotContextProvider} from './components/RobotContext.js';

function App() {
  const [currentStatus, setValue] = useState("");
  const controlDirection = (e) => {
    setValue(e);
  };
 const value = {currentStatus, setValue};
  return (
    <div className="App">
      <RobotContextProvider value={value}>
          <ControlComponent/>
          <RobotFeedComponent/>
      </RobotContextProvider>              
    </div>

  );
}

export default App;
