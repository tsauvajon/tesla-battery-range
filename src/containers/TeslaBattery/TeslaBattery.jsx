import React, { Component } from 'react';
import TeslaNotice from '../../components/TeslaNotice';
import TeslaCar from '../../components/TeslaCar';

class TeslaBattery extends Component {
  constructor() {
    super();
    this.state = {
      carStats: [{
        type: '60',
        range: 246,
      }],
      config: {
        speed: 55,
        temperature: 20,
        climate: true,
        wheelSize: 19,
      },
    };
  }
  render() {
    const { carStats, config } = this.state;
    const { speed, temperature, climate, wheelSize } = config;
    return (
      <form className="tesla-battery">
        <h1>Range per charge</h1>
        <TeslaCar wheelSize={wheelSize} />
        <TeslaNotice />
      </form>
    );
  }
}

export default TeslaBattery;
