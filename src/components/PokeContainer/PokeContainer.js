/**
 * This file provide examples onhow use React Context
 * for both Class and Functional component.
 */
import React, { useContext } from 'react';

import './style.css';

import LeftColumn from '../LeftColumn';
import PokeContext from '../PokeContext';
import PokeLoader from '../PokeLoader';
import RightColumn from '../RightColumn';

import { isLoading } from './helper';

/* ----- use functional component ----- */
const PokeContainer = () => {
  const context = useContext(PokeContext);
  const {
    loading,
    pokemon: { species },
  } = context;

  const pokeName = species ? species.toProperCase() : 'Pokémon';

  const inProgress = isLoading(loading);

  const pokeNamePlaceholder = (() => {
    if (inProgress) {
      return <PokeLoader />;
    }
    return <p id="poke-name-big">{pokeName}</p>;
  })();

  return (
    /** this is an example on how to consume */
    /** context before `useContext` hook */
    /** on functional component */
    <PokeContext.Consumer>
      {value => {
        const {
          pokemon: { sprite, types },
        } = value;

        return (
          <div id="poke-container">
            <div id="poke-name">
              {pokeNamePlaceholder}
            </div>

            <div id="contents">
              <div className="content">
                {/* this component receive props */}
                <LeftColumn sprite={sprite} types={types} />
              </div>
              <div className="content">
                {/* this component will consume context */}
                <RightColumn />
              </div>
            </div>
          </div>
        );
      }}
    </PokeContext.Consumer>
  );
};
/* ----- use functional component ----- */

/* ----- use class component ----- */
// class PokeContainer extends React.Component {
//   pokeNamePlaceholder() {
//     const {
//       loading,
//       pokemon: { species },
//     } = this.context;

//     const pokeName = species ? species.toProperCase() : 'Pokémon';

//     const inProgress = isLoading(loading);

//     if (inProgress) {
//       return <PokeLoader />;
//     }
//     return <p id="poke-name-big">{pokeName}</p>;
//   }

//   render() {
//     const {
//       pokemon: {
//         sprite,
//         types,
//       },
//     } = this.context;

//     return (
//       <div id="poke-container">
//         <div id="poke-name">
//           {this.pokeNamePlaceholder()}
//         </div>

//         <div id="contents">
//           <div className="content">
//             <LeftColumn sprite={sprite} types={types} />
//           </div>
//           <div className="content">
//             <RightColumn />
//           </div>
//         </div>
//       </div>
//     );
//   };
// }

// PokeContainer.contextType = PokeContext;
/* ----- use class component ----- */

export default PokeContainer;
