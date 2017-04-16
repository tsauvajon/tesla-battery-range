const counterDefaultVal = {
  speed: {
    title: 'Speed',
    unit: 'km/h',
    step: 5,
    min: 45,
    max: 70,
  },
  temperature: {
    title: 'Outside temperature',
    unit: '°C',
    step: 10,
    min: -10,
    max: 40,
  },
};

const mToKm = 1.60934;
const carModels = ['60', '60D', '75', '75D', '90D', 'P100D'];

export { counterDefaultVal, mToKm, carModels };
