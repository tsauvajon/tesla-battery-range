import React from 'react';
import PropTypes from 'prop-types';

const TeslaCar = props => (
  <div className="tesla-car">
    <div className="tesla-wheels">
      <div className={`tesla-wheel tesla-wheel-front tesla-wheel-${props.wheelSize}`} />
      <div className={`tesla-wheel tesla-wheel-rear tesla-wheel-${props.wheelSize}`} />
    </div>
  </div>
);

TeslaCar.propTypes = {
  wheelSize: PropTypes.number.isRequired,
};

export default TeslaCar;
