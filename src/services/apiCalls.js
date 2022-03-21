import axios from 'axios';

import { saveLoadingState, savePokemon } from '../redux/actions';

import {
  evolvesChainParser,
  pokeResponseParser,
  pokeSpeciesParser,
} from './utils';

import {
  BASE_URL,
  ENDPOINTS,
} from '../constants';

export const getPokemon = (pokeID) => async (dispatch, getState) => {
  let { pokemon } = getState();

  const url = new URL(BASE_URL);
  url.pathname = `${url.pathname}${ENDPOINTS.POKEMON}/${pokeID}`;

  try {
    dispatch(saveLoadingState(true));

    const pokeData = await axios.get(url.href);
    const parsedPokemon = pokeResponseParser(pokeData.data);

    const pokeSpecies = await axios.get(pokeData.data.species.url);
    const parsedSpecies = pokeSpeciesParser(pokeSpecies.data);

    const pokeEvolution = await axios.get(pokeSpecies.data.evolution_chain.url);
    const parsedEvolution = evolvesChainParser(pokeEvolution.data.chain);

    pokemon = {
      ...pokemon,
      ...parsedPokemon,
      ...parsedSpecies,
      evolution_chain: parsedEvolution,
    };

    dispatch(savePokemon(pokemon));
  } catch(err) {
    console.error(err);
  } finally {
    dispatch(saveLoadingState(false));
  }
};

