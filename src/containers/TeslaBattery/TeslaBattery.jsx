import React, { Component } from 'react';
import TeslaNotice from '../../components/TeslaNotice';

class TeslaBattery extends Component {
  constructor() {
    super();
    this.state = {
      // TODO
    };
  }
  render() {
    return (
      <form className="tesla-battery">
        <h1>Range per charge</h1>
        <TeslaNotice />
      </form>
    );
  }
}

export default TeslaBattery;
