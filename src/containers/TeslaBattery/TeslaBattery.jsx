import React, { Component } from 'react';
import getModelData from '../../services/BatteryService';
import TeslaNotice from '../../components/TeslaNotice';
import TeslaCar from '../../components/TeslaCar';
import TeslaStats from '../../components/TeslaStats';

const carModels = ['60', '60D', '75', '75D', '90D', 'P100D'];

const calculateStats = (models, config) => {
  const mToKm = 1.60934;
  const dataModels = getModelData();
  return models.map((model) => {
    const { speed, temperature, climate, wheelSize } = config;
    const miles = dataModels[model][wheelSize][climate ? 'on' : 'off'].speed[speed][temperature];
    const kilometers = Math.ceil(miles * mToKm);
    return {
      model,
      kilometers,
    };
  });
};

class TeslaBattery extends Component {
  constructor() {
    super();
    this.state = {
      carStats: [],
      config: {
        speed: 55,
        temperature: 20,
        climate: true,
        wheelSize: 19,
      },
    };
  }

  componentDidMount() {
    this.statsUpdate();
  }

  statsUpdate() {
    const carStats = calculateStats(carModels, this.state.config);
    this.setState({
      carStats,
    });
  }

  render() {
    const { carStats, config } = this.state;
    const { speed, temperature, climate, wheelSize } = config;
    return (
      <form className="tesla-battery">
        <h1>Range per charge</h1>
        <TeslaCar wheelSize={wheelSize} />
        <TeslaStats carStats={carStats} />
        <TeslaNotice />
      </form>
    );
  }
}

export default TeslaBattery;
