import React from 'react';
import PropTypes from 'prop-types';
import LabelsLists from './LabelsLists';

const TeslaWheels = ({ wheelSize, handleChangeWheels }) => (
  <div className="tesla-wheels_component">
    <p className="tesla-wheels_title">
      Wheels
    </p>
    <div className="tesla-wheels_container cf">
      <LabelsLists
        wheelSize={wheelSize}
        handleChangeWheels={size => handleChangeWheels(size)}
      />
    </div>
  </div>
);

TeslaWheels.propTypes = {
  handleChangeWheels: PropTypes.func.isRequired,
  wheelSize: PropTypes.number.isRequired,
};

export default TeslaWheels;
