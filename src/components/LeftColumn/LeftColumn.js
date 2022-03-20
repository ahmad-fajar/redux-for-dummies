import React from 'react';

import './style.css';

import PokeBall from '../../assets/poke-ball.webp';

const LeftColumn = props => {
  const { types } = props;
  const sprite = props?.sprite || PokeBall;

  const typeElem = types.map(({ slot, type }) => {
    return <p className="poke-type" key={slot}>Slot {slot}: {type.name.toProperCase()}</p>;
  });

  const typeLines = typeElem.divideBy(3, (line, idx) => <div key={idx} className="poke-line">{line}</div>);

  return (
    <div id="left-column">
      <img id="poke-sprite" src={sprite} alt="poke-sprite"/>

      <div id="poke-types_container">
        <p>Types</p>
        <div id="poke-types_lines">
          {typeLines}
        </div>
      </div>
    </div>
  );
};

export default LeftColumn;
