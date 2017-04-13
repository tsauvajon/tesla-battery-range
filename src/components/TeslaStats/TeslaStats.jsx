import React from 'react';
import PropTypes from 'prop-types';

const TeslaStats = ({ carStats }) => {
  const items = carStats.map(({ model, kilometers }) => (
    <li key={model}>
      <div className={`tesla-stats-icon tesla-stats-icon-${model.toLowerCase()}`} />
      <p>{kilometers}</p>
    </li>
  ));

  return (
    <div className="tesla-stats">
      <ul>
        {items}
      </ul>
    </div>
  );
};

TeslaStats.propTypes = {
  carStats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TeslaStats;
