import React from 'react';

import { getStatColor } from './helper';

import { MAX_STAT } from '../../constants';

const StatBar = props => {
  const { stat } = props;

  const percentage = (stat / MAX_STAT);

  const bar = {
    height: '1em',
    width: '20vw',
    backgroundColor: 'gainsboro',
    borderRadius: '0.5em',
  };

  const fill  = {
    background: getStatColor(percentage),
    width: `${Math.round(percentage * 100)}%`,
    float: 'left',
    transformOrigin: 'center left',
    height:  '100%',
    borderRadius: '0.5em',
  };

  return (
    <div className="poke-stat-bar" style={bar}>
      <div style={fill} />
    </div>
  );
};

export default StatBar;
