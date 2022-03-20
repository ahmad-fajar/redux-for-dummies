/*
interface IPokeData {
  // past_types: any[];
  abilities: IPokeAbility[];
  height: number;
  species: IPokeSpecies;
  sprites: IPokeSprites;
  stats: IPokeStat[];
  types: IPokeType[];
}

interface IPokeAbility {
  ability: {
    name: string;
  };
}

interface IPokeSpecies {
  name: string;
}

interface IPokeSprites {
  other: {
    'official-artwork': {
      front_default: string;
    };
  };
}

type TPokeStatType = 'hp' | 'attack' | 'defense' | 'special-attack' | 'special-defense' | 'speed';
interface IPokeStat {
  base_stat: number;
  stat: {
    name: TPokeStatType;
  };
}

interface IPokeType {
  type: {
    name: string;
  };
}
*/

export const POKE_DEFAULT = {
  abilities: [],
  height: 0,
  species: {
    name: '',
  },
  sprites: {
    other: {
      'official-artwork': {
        front_default: '',
      },
    },
  },
  stats: [],
  types: [],
};
