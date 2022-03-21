export const savePokemon = (pokemon) => ({
  type: 'SAVE_POKEMON',
  payload: { pokemon },
});

export const savePokemonSpecies = (evolves_from, is_legendary, is_mythical) => ({
  type: 'SAVE_SPECIES',
  payload: { evolves_from, is_legendary, is_mythical },
});

export const savePokemonEvolution = (evolution_chain) => ({
  type: 'SAVE_EVOLUTION',
  payload: { evolution_chain },
});
