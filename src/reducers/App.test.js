import appReducer from './App';

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

describe('test reducers', () => {
  it('should handle initial stat', () => {
    expect(initialState)
    .toEqual(
      appReducer(undefined, {}),
    );
  });

  it('should handle CHANGE_CLIMATE', () => {
    const climateChangeState = {
      carStats: [
        {
          kilometers: 430,
          model: '60',
        }, {
          kilometers: 440,
          model: '60D',
        }, {
          kilometers: 520,
          model: '75',
        }, {
          kilometers: 538,
          model: '75D',
        }, {
          kilometers: 590,
          model: '90D',
        }, {
          kilometers: 659,
          model: 'P100D',
        },
      ],
      config: {
        speed: 55,
        temperature: 20,
        climate: false,
        wheelSize: 19,
      },
    };

    expect(climateChangeState)
      .toEqual(
        appReducer(initialState, {
          type: 'CHANGE_CLIMATE',
        }),
      );
  });

  it('should handle SPEED_UP', () => {
    const speedUpState = {
      carStats: [
        {
          kilometers: 363,
          model: '60',
        }, {
          kilometers: 369,
          model: '60D',
        }, {
          kilometers: 438,
          model: '75',
        }, {
          kilometers: 451,
          model: '75D',
        }, {
          kilometers: 496,
          model: '90D',
        }, {
          kilometers: 556,
          model: 'P100D',
        },
      ],
      config: {
        speed: 60,
        temperature: 20,
        climate: true,
        wheelSize: 19,
      },
    };

    expect(speedUpState)
      .toEqual(
        appReducer(initialState, {
          type: 'SPEED_UP',
          value: 55,
          step: 5,
          max: 70,
        }),
      );
  });

  it('should handle SPEED_DOWN', () => {
    const speedDownState = {
      carStats: [
        {
          kilometers: 430,
          model: '60',
        }, {
          kilometers: 437,
          model: '60D',
        }, {
          kilometers: 520,
          model: '75',
        }, {
          kilometers: 535,
          model: '75D',
        }, {
          kilometers: 588,
          model: '90D',
        }, {
          kilometers: 659,
          model: 'P100D',
        },
      ],
      config: {
        speed: 50,
        temperature: 20,
        climate: true,
        wheelSize: 19,
      },
    };

    expect(speedDownState)
      .toEqual(
        appReducer(initialState, {
          type: 'SPEED_DOWN',
          value: 55,
          step: 5,
          min: 45,
        }),
      );
  });

  it('should handle CHANGE_WHEELS', () => {
    const changeWheelsState = {
      carStats: [
        {
          kilometers: 388,
          model: '60',
        }, {
          kilometers: 396,
          model: '60D',
        }, {
          kilometers: 469,
          model: '75',
        }, {
          kilometers: 483,
          model: '75D',
        }, {
          kilometers: 532,
          model: '90D',
        }, {
          kilometers: 577,
          model: 'P100D',
        },
      ],
      config: {
        speed: 55,
        temperature: 20,
        climate: true,
        wheelSize: 21,
      },
    };

    expect(changeWheelsState)
      .toEqual(
        appReducer(initialState, {
          type: 'CHANGE_WHEELS',
          value: 21,
        }),
      );
  });

  it('should handle TEMPERATURE_UP', () => {
    const temperatureUpState = {
      carStats: [
        {
          kilometers: 395,
          model: '60',
        }, {
          kilometers: 404,
          model: '60D',
        }, {
          kilometers: 478,
          model: '75',
        }, {
          kilometers: 495,
          model: '75D',
        }, {
          kilometers: 543,
          model: '90D',
        }, {
          kilometers: 610,
          model: 'P100D',
        },
      ],
      config: {
        speed: 55,
        temperature: 30,
        climate: true,
        wheelSize: 19,
      },
    };

    expect(temperatureUpState)
      .toEqual(
        appReducer(initialState, {
          type: 'TEMPERATURE_UP',
          value: 20,
          step: 10,
          max: 40,
        }),
      );
  });

  it('should handle TEMPERATURE_DOWN', () => {
    const temperatureDownState = {
      carStats: [
        {
          kilometers: 390,
          model: '60',
        }, {
          kilometers: 398,
          model: '60D',
        }, {
          kilometers: 472,
          model: '75',
        }, {
          kilometers: 487,
          model: '75D',
        }, {
          kilometers: 535,
          model: '90D',
        }, {
          kilometers: 599,
          model: 'P100D',
        },
      ],
      config: {
        speed: 55,
        temperature: 10,
        climate: true,
        wheelSize: 19,
      },
    };

    expect(temperatureDownState)
      .toEqual(
        appReducer(initialState, {
          type: 'TEMPERATURE_DOWN',
          value: 20,
          step: 10,
          min: -10,
        }),
      );
  });
});
