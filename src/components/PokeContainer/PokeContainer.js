import React from 'react';

import './style.css';

import LeftColumn from '../LeftColumn';
import RightColumn from '../RightColumn';

const PokeContainer = props => {
  const {
    pokemon: {
      species = 'Pokémon',
      sprite,
      types,
      ...rightColumn
    },
  } = props;

  console.log(props.pokemon)
  return (
    <div id="poke-container">
      <p id="poke-name-big">{species.toProperCase()}</p>

      <div id="contents">
        <div className="content">
          <LeftColumn sprite={sprite} types={types} />
        </div>
        <div className="content">
          <RightColumn {...rightColumn} species={species} />
        </div>
      </div>
    </div>
  );
};

export default PokeContainer;
