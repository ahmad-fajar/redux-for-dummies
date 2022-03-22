// source https://codepen.io/vinztt/pen/XjEyvZ

import React, { memo } from 'react';

import './style.css';

const PokeLoader = () => {
  return (
      <div className="wrapper">
        <div className="pokeball" />
      </div>
  );
};

export default memo(PokeLoader);
