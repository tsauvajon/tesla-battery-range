import getModelData from '../services/BatteryService';
import { mToKm, carModels } from '../constants';

const initialState = {
  carStats: [
    {
      kilometers: 396,
      model: '60',
    }, {
      kilometers: 403,
      model: '60D',
    }, {
      kilometers: 478,
      model: '75',
    }, {
      kilometers: 493,
      model: '75D',
    }, {
      kilometers: 541,
      model: '90D',
    }, {
      kilometers: 606,
      model: 'P100D',
    },
  ],
  config: {
    speed: 55,
    temperature: 20,
    climate: true,
    wheelSize: 19,
  },
};

const calculateStats = state => (
  carModels.map((model) => {
    const { speed, temperature, climate, wheelSize } = state.config;
    // console.log(state.config);
    const miles = getModelData()[model][wheelSize][climate ? 'on' : 'off'].speed[speed][temperature];
    const kilometers = Math.ceil(miles * mToKm);
    return {
      model,
      kilometers,
    };
  })
);

const updateStats = (state, newState) => ({
  ...state,
  config: newState.config,
  carStats: calculateStats(newState),
});

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_CLIMATE':
      return updateStats(state, {
        ...state,
        config: {
          ...state.config,
          climate: !state.config.climate,
        },
      });
    case 'SPEED_UP': {
      const speed = (action.value + action.step) < action.max ?
        action.value + action.step
        : action.value;
      return updateStats(
        state, {
          ...state,
          config: {
            ...state.config,
            speed,
          },
        },
      );
    }
    case 'SPEED_DOWN': {
      const speed = (action.value + action.step) > action.min ?
        action.value - action.step
        : action.value;
      return updateStats(
        state, {
          ...state,
          config: {
            ...state.config,
            speed,
          },
        },
      );
    }
    case 'CHANGE_WHEELS':
      return updateStats(
        state, {
          ...state,
          config: {
            ...state.config,
            wheelSize: action.value,
          },
        },
      );
    case 'TEMPERATURE_UP': {
      const temperature = (action.value + action.step) < action.max ?
      action.value + action.step
      : action.value;
      return updateStats(
        state, {
          ...state,
          config: {
            ...state.config,
            temperature,
          },
        },
      );
    }
    case 'TEMPERATURE_DOWN': {
      const temperature = (action.value + action.step) > action.min ?
      action.value - action.step
      : action.value;
      return updateStats(
        state, {
          ...state,
          config: {
            ...state.config,
            temperature,
          },
        },
      );
    }
    default:
      return state;
  }
};

export default appReducer;
