import { counterDefaultVal } from '../constants';

const { speed, temperature } = counterDefaultVal;

const speedUp = value => ({
  type: 'SPEED_UP',
  value,
  step: speed.step,
  max: speed.max,
});

const speedDown = value => ({
  type: 'SPEED_DOWN',
  value,
  step: speed.step,
  min: speed.min,
});

const temperatureUp = value => ({
  type: 'TEMPERATURE_UP',
  value,
  step: temperature.step,
  max: temperature.max,
});

const temperatureDown = value => ({
  type: 'TEMPERATURE_DOWN',
  value,
  step: temperature.step,
  min: temperature.min,
});

const changeClimate = () => ({
  type: 'CHANGE_CLIMATE',
});

const changeWheels = value => ({
  type: 'CHANGE_WHEELS',
  value,
});

const updateStats = () => ({
  type: 'UPDATE_STATS',
});

export default {
  speedUp,
  speedDown,
  temperatureUp,
  temperatureDown,
  changeClimate,
  changeWheels,
  updateStats,
};
