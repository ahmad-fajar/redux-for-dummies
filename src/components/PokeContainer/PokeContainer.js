import React from 'react';

import './style.css';

import LeftColumn from '../LeftColumn';
import RightColumn from '../RightColumn';
import PokeLoader from '../PokeLoader';

import { isLoading } from './helper';

const PokeContainer = props => {
  const {
    loading,
    pokemon: {
      species,
      sprite,
      types,
      ...rightColumn
    },
    showPokemon,
  } = props;

  const pokeName = species ? species.toProperCase() :  'Pokémon';

  const inProgress = isLoading(loading);

  const pokeNamePlaceholder = (() => {
    if (inProgress) {
      return <PokeLoader />;
    }
    return <p id="poke-name-big">{pokeName}</p>;
  })();

  return (
    <div id="poke-container">
      <div id="poke-name">
        {pokeNamePlaceholder}
      </div>

      <div id="contents">
        <div className="content">
          <LeftColumn sprite={sprite} types={types} />
        </div>
        <div className="content">
          <RightColumn {...rightColumn} species={species} showPokemon={showPokemon} />
        </div>
      </div>
    </div>
  );
};

export default PokeContainer;
