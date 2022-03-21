export const pokeResponseParser = (pokeResp) => {
  const {
    abilities: abs,
    height,
    id,
    species: {
      name: species,
    },
    sprites: {
      other: {
        'official-artwork': {
          front_default: sprite,
        },
      },
    },
    stats: sts,
    types: tys,
    weight,
  } = pokeResp;

  const abilities = abs.map(a => a.ability.name);

  const stats = sts.map(({ base_stat, stat: { name } }) => ({
    base_stat, name,
  }));

  const types = tys.map(({ slot, type: { name }}) => ({
    slot, name,
  }));

  return {
    abilities,
    height,
    id,
    species,
    sprite,
    stats,
    types,
    weight,
  };
};

export const pokeSpeciesParser = species => {
  const {
    evolves_from_species,
    is_legendary,
    is_mythical,
  } = species;

  return {
    evolves_from: evolves_from_species?.name || '-',
    is_legendary,
    is_mythical,
  };
};

export const evolvesChainParser = (chain) => {
  const chainList = [];

  const chainConcat = (cChain, cName) => {
    if (!cChain.length) {
      chainList.push(cName);
      return;
    }

    cChain.forEach(({ evolves_to: eTo, species: spec }) => {
      const nextName = `${cName}|${spec.name}`;
      chainConcat(eTo, nextName);
    });
  };

  chainConcat(chain.evolves_to, chain.species.name);

  return chainList;
};
