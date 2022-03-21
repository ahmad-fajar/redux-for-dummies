// source https://codepen.io/vinztt/pen/XjEyvZ

import React, { memo } from 'react';

import './style.css';

const PokeLoader = () => {
  return (
      <div class="wrapper">
        <div class="pokeball" />
      </div>
  );
};

export default memo(PokeLoader);
