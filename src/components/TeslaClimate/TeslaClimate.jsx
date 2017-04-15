import React from 'react';
import PropTypes from 'prop-types';

const TeslaClimate = ({ value, limit, handleChangeClimate }) => (
  <div className="tesla-climate">
    <label
      className={`tesla-climate_item${value ? ' tesla-climate_item-active' : ''}${!limit ? ' tesla-heat' : ''}`}
      htmlFor="climate"
    >
      <i className="tesla-climate_icon" />
      <input
        type="checkbox"
        name="climate"
        id="climate"
        checked={value}
        onChange={() => handleChangeClimate()}
      />
    </label>
  </div>
);

TeslaClimate.propTypes = {
  handleChangeClimate: PropTypes.func.isRequired,
  limit: PropTypes.bool.isRequired,
  value: PropTypes.bool.isRequired,
};

export default TeslaClimate;
