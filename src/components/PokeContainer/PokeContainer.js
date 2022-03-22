import React from 'react';
import {
  // connect,
  useSelector,
} from 'react-redux';

import './style.css';

import LeftColumn from '../LeftColumn';
import RightColumn from '../RightColumn';
import PokeLoader from '../PokeLoader';

// import { isLoading } from './helper';

const PokeContainer = props => {
  /* ----- if use `connect` ----- */
  // const {
  //   loading,
  //   species,
  // } = props;

  // const inProgress = isLoading(loading);
  /* ----- if use `connect` ----- */

  /* ----- if use useSelector----- */
  /**
   * Compare render counts between these `species` and `loading`
   * combination.
   * Don't forget to comment out dispatched `'SAVE_QUERY'` in
   * `RightColumn` component to prevent re-render because parent (App)
   * re-render.
   */
  // const species = undefined;
  const species = useSelector(state => state.pokemon.species);
  // const loading = false;
  const loading = useSelector(state => state.app.loading);

  // const { loading, species } = useSelector(state => ({
  //   loading: state.app.loading,
  //   species: state.pokemon.species,
  // }));
  /* ----- if use useSelector----- */

  const pokeName = species ? species.toProperCase() : 'Pokémon';


  const pokeNamePlaceholder = (() => {
    if (loading) {
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

// const mapStateToProps = state => {
//   const { app, pokemon } = state;
//   return {
//     loading: app.loading,
//     species: pokemon.species,
//   };
// };

// export default connect(mapStateToProps)(PokeContainer);
export default PokeContainer;
