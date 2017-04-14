import React from 'react';
import TeslaBattery from './containers/TeslaBattery';
import Header from './components/Header';
import './App.css';

const counterDefaultVal = {
  speed: {
    title: 'Speed',
    unit: 'km/h',
    step: 5,
    min: 45,
    max: 70,
  },
  temperature: {
    title: 'Outside Temperature',
    unit: '°',
    step: 10,
    min: -10,
    max: 40,
  },
};

const App = () => (
  <div>
    <Header />
    <TeslaBattery counterDefaultVal={counterDefaultVal} />
  </div>
);

export default App;
