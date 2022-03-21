/*
interface IPokeResponse {
  // past_types: any[];
  abilities: IPokeAbility[];
  height: number;
  id: number;
  species: IPokeSpecies;
  sprites: IPokeSprites;
  stats: IPokeStatResp[];
  types: IPokeTypeResp[];
  weight: number;
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
interface IPokeStatResp {
  base_stat: number;
  stat: {
    name: TPokeStatType;
  };
}

interface IPokeTypeResp {
  slot: number;
  type: {
    name: string;
  };
}
*/

export const POKE_DUMMY_RESP = {
  abilities: [
    {
      ability: {
        name: 'overgrow',
      },
    },
    {
      ability: {
        name: 'chlorophyll',
      },
    },
  ],
  height: 7,
  species: {
    name: 'bulbasaur',
  },
  sprites: {
    other: {
      'official-artwork': {
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
      },
    },
  },
  stats: [
    {
      base_stat: 45,
      stat: {
        name: 'hp',
      }
    },
    {
      base_stat: 49,
      stat: {
        name: 'attack',
      }
    },
    {
      base_stat: 49,
      stat: {
        name: 'defense',
      }
    },
    {
      base_stat: 65,
      stat: {
        name: 'special-attack',
      }
    },
    {
      base_stat: 65,
      stat: {
        name: 'special-defense',
      }
    },
    {
      base_stat: 45,
      stat: {
        name: 'speed',
      }
    }
  ],
  types: [
    {
      slot: 1,
      type: {
        name: 'grass',
      }
    },
    {
      slot: 2,
      type: {
        name: 'poison',
      }
    }
  ],
  weight: 69,
};

/*
interface IPokeState {
  abilities: string[];
  height: number;
  species: string;
  sprite: string;
  stats: IPokeStat[];
  types: IPokeType[];
  weight: number;
}

// type TPokeStatType = 'hp' | 'attack' | 'defense' | 'special-attack' | 'special-defense' | 'speed';
interface IPokeStat {
  base_stat: number;
  name: TPokeStatType;
}

interface IPokeType {
  name: string;
  slot: number;
}
*/

export const POKE_DEFAULT_STATE = {
  abilities: [],
  evolution_chain: [],
  evolves_from: '',
  height: 0,
  id: 0,
  is_legendary: false,
  is_mythical: false,
  species: '',
  sprite: '',
  stats: [],
  types: [],
  weight: 0,
};

/*
interface IPokeSpecies {
  evolution_chain: {
    url: string;
  };
  evolves_from_species: {
    name: string;
  };
  is_legendary: boolean;
  is_mythical: boolean;
  varieties: IPokeVariety[];
}

interface IPokeVariety {
  pokemon: {
    name: string;
  };
}
*/

export const POKE_DUMMY_SPECIES = {
  evolution_chain: {
    url: 'https://pokeapi.co/api/v2/evolution-chain/2/'
  },
  evolves_from_species: {
    name: 'charmender',
  },
  is_legendary: false,
  is_mythical: false,
  varieties: [
    {
      pokemon: {
        name: 'charmeleon'
      },
    }
  ],
};

/*
interface IPokeEvolutionChain {
  chain: IPokeEvolveChain;
  id: number;
}

interface IPokeEvolveChain {
  evolves_to: IPokeEvolveChain[];
  species: {
    name: string;
  };
}
*/

export const POKE_DUMMY_EVOLUTION = {
  chain: {
    evolves_to: [
      {
        evolves_to: [
          {
            evolves_to: [],
            species: {
              name: 'charizard',
            },
          },
        ],
        species: {
          name: 'charmeleon'
        },
      },
    ],
    species: {
      name: 'charmander',
    },
  },
  id: 2,
};
