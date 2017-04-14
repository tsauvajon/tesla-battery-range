import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getModelData from '../../services/BatteryService';
import TeslaNotice from '../../components/TeslaNotice';
import TeslaCar from '../../components/TeslaCar';
import TeslaStats from '../../components/TeslaStats';
import TeslaCounter from '../../components/TeslaCounter';

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
  constructor(props) {
    super(props);
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

  updateCounterState(title, newValue) {
    const config = { ...this.state.config };
    const field = title === 'Speed' ? 'speed' : 'temperature';
    config[field] = newValue;
    this.setState(() => ({ config }));
  }

  decrement(e, title) {
    e.preventDefault();
    let currentValue;
    let minValue;
    let step;

    const { speed, temperature } = this.props.counterDefaultVal;
    if (title === 'Speed') {
      currentValue = this.state.config.speed;
      minValue = speed.min;
      step = speed.step;
    } else {
      currentValue = this.state.config.temperature;
      minValue = temperature.min;
      step = temperature.step;
    }

    if (currentValue > minValue) {
      const newValue = currentValue - step;
      this.updateCounterState(title, newValue);
    }
  }

  increment(e, title) {
    e.preventDefault();
    let currentValue;
    let maxValue;
    let step;

    const { speed, temperature } = this.props.counterDefaultVal;
    if (title === 'Speed') {
      currentValue = this.state.config.speed;
      maxValue = speed.max;
      step = speed.step;
    } else {
      currentValue = this.state.config.temperature;
      maxValue = temperature.max;
      step = temperature.step;
    }

    if (currentValue < maxValue) {
      const newValue = currentValue + step;
      this.updateCounterState(title, newValue);
    }
  }

  render() {
    const { carStats, config } = this.state;
    const { speed, temperature, climate, wheelSize } = config;
    return (
      <form className="tesla-battery">
        <h1>Range per charge</h1>
        <TeslaCar wheelSize={wheelSize} />
        <TeslaStats carStats={carStats} />
        <div className="tesla-controls cf">
          <TeslaCounter
            currentValue={speed}
            initValues={this.props.counterDefaultVal.speed}
            increment={(e, title) => this.increment(e, title)}
            decrement={(e, title) => this.decrement(e, title)}
          />
          <div className="tesla-climate-container cf">
            <TeslaCounter
              currentValue={temperature}
              initValues={this.props.counterDefaultVal.temperature}
              increment={(e, title) => this.increment(e, title)}
              decrement={(e, title) => this.decrement(e, title)}
            />
          </div>
        </div>
        <TeslaNotice />
      </form>
    );
  }
}

TeslaBattery.propTypes = {
  counterDefaultVal: PropTypes.shape({
    speed: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
      step: PropTypes.number,
    }),
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
      step: PropTypes.number,
    }),
  }).isRequired,
};

export default TeslaBattery;
