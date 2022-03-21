import React from 'react';
import { connect } from 'react-redux';

import './style.css';

import PokeBall from '../../assets/poke-ball.webp';

const LeftColumn = props => {
  const { sprite, types } = props;

  const typeElem = types.map(({ slot, name }) => {
    return (
      <p className="poke-type" key={slot}>
        Slot {slot}: <code>{name.toProperCase()}</code>
      </p>
    );
  });

  const typeLines = typeElem.divideBy(3, (line, idx) => <div key={idx} className="poke-line">{line}</div>);

  return (
    <div id="left-column">
      <img id="poke-sprite" src={sprite || PokeBall} alt="poke-sprite"/>

      <div id="poke-types_container">
        <p>Types</p>
        <div id="poke-types_lines">
          {typeLines}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const { pokemon } = state;
  return {
    sprite: pokemon.sprite,
    types: pokemon.types,
  };
};

export default connect(mapStateToProps)(LeftColumn);
