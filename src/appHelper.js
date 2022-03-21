export const pokeResponseParser = (pokeResp) => {
  const {
    abilities: abs,
    height,
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
    species,
    sprite,
    stats,
    types,
    weight,
  };
};
