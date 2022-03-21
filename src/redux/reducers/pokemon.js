import { POKE_DEFAULT_STATE } from '../../constants';


const pokemonReducer = (state = POKE_DEFAULT_STATE, actions) => {
  const { type, payload } = actions;

  switch (type) {
    case 'SAVE_POKEMON': {
      return { ...state, ...payload.pokemon };
    }

    case 'SAVE_SPECIES_NAME': {
      return { ...state, species: payload };
    }

    default: return state;
  }
};

export default pokemonReducer;
