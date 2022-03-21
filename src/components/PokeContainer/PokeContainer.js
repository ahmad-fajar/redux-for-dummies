import React from 'react';
import { connect } from 'react-redux';

import './style.css';

import LeftColumn from '../LeftColumn';
import RightColumn from '../RightColumn';
import PokeLoader from '../PokeLoader';

import { isLoading } from './helper';

const PokeContainer = props => {
  const {
    loading,
    species,
  } = props;

  const pokeName = species ? species.toProperCase() : 'Pokémon';

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
          <LeftColumn />
        </div>
        <div className="content">
          <RightColumn />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const { app, pokemon } = state;
  return {
    loading: app.loading,
    species: pokemon.species,
  };
};

export default connect(mapStateToProps)(PokeContainer);
