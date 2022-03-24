import React, { Fragment } from 'react';
import {
  // connect,
  shallowEqual,
  useDispatch,
  useSelector,
} from 'react-redux';

import { getPokemon } from '../../services/apiCalls';

import StatBar from './StatBar';

import './style.css';

const RightColumn = props => {
  /* ----- if use `connect` ----- */
  // const {
  //   abilities,
  //   evolution_chain,
  //   evolves_from,
  //   height,
  //   id,
  //   is_legendary,
  //   is_mythical,
  //   showPokemon,
  //   species,
  //   stats,
  //   weight,
  // } = props;
  /* ----- if use `connect` ----- */

  /* ----- if use `useDispatch` and useSelector----- */
  const dispatch = useDispatch();

  const {
    abilities,
    evolution_chain,
    evolves_from,
    height,
    id,
    is_legendary,
    is_mythical,
    species,
    stats,
    weight,
  } = useSelector(
    state => {
      const {
        pokemon: {
          abilities,
          evolution_chain,
          evolves_from,
          height,
          id,
          is_legendary,
          is_mythical,
          species,
          stats,
          weight,
        },
      } = state;
      return {
        abilities,
        evolution_chain,
        evolves_from,
        height,
        id,
        is_legendary,
        is_mythical,
        species,
        stats,
        weight,
      };
    },

    /* will re-render only if `next.id === prev.id` */
    // (next, prev) => next.id === prev.id, // compare specific key(s)
    shallowEqual, // use react-redux `shallowEqual` for shallow compare
  );

  // const abilities = useSelector(({ pokemon }) => pokemon.abilities);
  // const evolution_chain = useSelector(({ pokemon }) => pokemon.evolution_chain);
  // const evolves_from = useSelector(({ pokemon }) => pokemon.evolves_from);
  // const height = useSelector(({ pokemon }) => pokemon.height);
  // const id = useSelector(({ pokemon }) => pokemon.id);
  // const is_legendary = useSelector(({ pokemon }) => pokemon.is_legendary);
  // const is_mythical = useSelector(({ pokemon }) => pokemon.is_mythical);
  // const species = useSelector(({ pokemon }) => pokemon.species);
  // const stats = useSelector(({ pokemon }) => pokemon.stats);
  // const weight = useSelector(({ pokemon }) => pokemon.weight);

  /* ----- if use `useDispatch` and useSelector----- */

  const properify = s => s.replace('-', ' ').toProperCase();

  const pokeAbilities = abilities.map((a, idx) => {
    return (
      <Fragment key={a}>
        <span className="table-list">
          <code>{properify(a)}</code>
        </span>
        {(idx !== (abilities.length - 1)) && <br/>}
      </Fragment>
    );
  });

  const pokeStats = stats.map((s, idx) => {
    const {
      base_stat,
      name: statName,
    } = s;

    return (
      <Fragment key={statName}>
        {properify(statName)} &nbsp;
        <code><strong>{base_stat}</strong></code>
        <StatBar stat={base_stat} />
        {(idx !== (stats.length - 1)) && <br/>}
      </Fragment>
    );
  });

  const rowGenerator = (name, desc) => (
    <tr className="poke-table_row">
      <td className="poke-table_name-col">{name}</td>
      <td className="poke-table_desc-col">{desc}</td>
    </tr>
  );

  const evolutionList = ((chain) => {
    if (!chain?.length) {
      return 'None';
    }

    /* comment this function if using `connect` (use mapped `showPokemon` to dispatch) */
    const showPokemon = pokeID => {
      console.log('dispatched using `useDispatch` hooks');
      dispatch(getPokemon(pokeID));
      dispatch({
        type: 'SAVE_QUERY',
        payload: {
          searchQuery: pokeID,
        },
      });
    };

    const list = chain.map(c => {
      const steps = c.split('|');
      const stepElem = steps.map(s => {
        if (s === species) {
          return <span key={s}><strong>{s.toProperCase()}</strong></span>;
        }
        return (
          <span key={s} className="link" onClick={() => showPokemon(s)}>
            {s.toProperCase()}
          </span>
        );
      });

      return (
        <p key={c} className="evolution-path">
          {stepElem}
        </p>
      );
    });

    return list;
  })(evolution_chain);

  console.log('render right column');

  return (
    <div className="right-column">
      <table id="poke-stat-table">
        <tbody>
          {rowGenerator('ID', id)}

          {rowGenerator('Legendary', is_legendary ? 'Yes' : 'No')}

          {rowGenerator('Mythical', is_mythical ? 'Yes' : 'No')}

          {rowGenerator('Abilities', pokeAbilities)}

          {rowGenerator('Height', height)}

          {rowGenerator('Weight', weight)}

          {rowGenerator('Species', species.toProperCase())}

          {rowGenerator('Evolves from', evolves_from ? evolves_from.toProperCase() : '-')}

          {rowGenerator('Evolution path', evolutionList)}

          {rowGenerator('Base Stats', pokeStats)}

        </tbody>
      </table>
    </div>
  );
};

/* commented lines are if use redux with `connect` wrapper */
// const mapStateToProps = state => {
//   const {
//     pokemon: {
//       abilities,
//       evolution_chain,
//       evolves_from,
//       height,
//       id,
//       is_legendary,
//       is_mythical,
//       species,
//       stats,
//       weight,
//     },
//   } = state;

//   return {
//     abilities,
//     evolution_chain,
//     evolves_from,
//     height,
//     id,
//     is_legendary,
//     is_mythical,
//     species,
//     stats,
//     weight,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     showPokemon: pokeID => {
//     console.log('dispatched using mapped dispatch);
//       dispatch(getPokemon(pokeID));
//       dispatch({
//         type: 'SAVE_QUERY',
//         payload: {
//           searchQuery: pokeID,
//         },
//       });
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(RightColumn);

/* since use `useDispatch` and `useSelector`, use this "export default" */
export default RightColumn;
