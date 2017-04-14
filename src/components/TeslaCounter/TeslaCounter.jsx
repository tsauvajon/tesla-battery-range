import React from 'react';
import PropTypes from 'prop-types';

const mToKm = 1.60934;

const TeslaCounter = props => (
  <div className="tesla-counter">
    <p className="tesla-counter_title">
      {props.initValues.title}
    </p>
    <div className="tesla-counter_container cf">
      <div className="tesla-counter_item">
        <p className="tesla-counter_number">
          {Math.ceil(props.currentValue * mToKm)}
          <span>
            {props.initValues.unit}
          </span>
        </p>
        <div className="tesla-counter_controls">
          <button
            onClick={e => props.increment(e, props.initValues.title)}
            disabled={props.currentValue >= props.initValues.max}
          />
          <button
            onClick={e => props.decrement(e, props.initValues.title)}
            disabled={props.currentValue <= props.initValues.min}
          />
        </div>
      </div>
    </div>
  </div>
);

TeslaCounter.propTypes = {
  currentValue: PropTypes.number.isRequired,
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
  initValues: PropTypes.shape({
    max: PropTypes.number,
    min: PropTypes.number,
    title: PropTypes.string,
    unit: PropTypes.unit,
  }).isRequired,
};

export default TeslaCounter;
