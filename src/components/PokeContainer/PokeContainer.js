import React from 'react';

import './style.css';

import LeftColumn from '../LeftColumn';
import RightColumn from '../RightColumn';

const PokeContainer = props => {
  const {
    pokemon: {
      name: pokeName = 'Pokémon',
      sprites: {
        other: {
          'official-artwork': {
            front_default: sprite = '',
          },
        },
      },
      types = [],
      ...rightColumn
    },
  } = props;

  return (
    <div id="poke-container">
      <p id="poke-name-big">{pokeName.toProperCase()}</p>

      <div id="contents">
        <div className="content">
          <LeftColumn sprite={sprite} types={types} />
        </div>
        <div className="content">
          <RightColumn {...rightColumn} />
        </div>
      </div>
    </div>
  );
};

export default PokeContainer;
