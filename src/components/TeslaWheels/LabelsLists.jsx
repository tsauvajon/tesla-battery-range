import React from 'react';
import PropTypes from 'prop-types';

const sizes = [19, 21];

const LabelsLists = ({ wheelSize, handleChangeWheels }) => (
  <div>
    {sizes.map(size => (
      <label
        key={size}
        className={`tesla-wheels_item tesla-wheels_item-${size}${wheelSize === size ? ' tesla-wheels_item-active' : ''}`}
        htmlFor={`wheelSize-${size}`}
      >
        <input
          type="radio"
          name="wheelSize"
          id={`wheelSize-${size}`}
          value={size}
          checked={wheelSize === size}
          onChange={() => handleChangeWheels(size)}
        />
        <p>
          {size}&quot;
        </p>
      </label>
    ))}
  </div>
);

LabelsLists.propTypes = {
  handleChangeWheels: PropTypes.func.isRequired,
  wheelSize: PropTypes.number.isRequired,
};

export default LabelsLists;
