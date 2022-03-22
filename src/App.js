import axios from 'axios';
import React, { Component } from 'react';

import { cloneObject, debounce } from './utils';

import {
  BASE_URL,
  ENDPOINTS,
  POKE_DEFAULT_STATE,
  SEARCH_LIMIT,
  SEARCH_PARAMS,
} from './constants';

import PokeContainer from './components/PokeContainer';
import PokeContext from './components/PokeContext';
/**
 * alternatively, you can create and export `PokeContext` here.
 * ```
 * export const PokeContext = React.createContext();
 * ```
 */

import './App.css';

import pokeApi from './assets/pokeapi_256.png';

import { evolvesChainParser, pokeResponseParser } from './appHelper';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      pokemon: cloneObject(POKE_DEFAULT_STATE),
      loading: {
        evolutionChain: false,
        pokemon: false,
        species: false,
      },
    };

    this.getPokemon = debounce(this.getPokemon.bind(this), 1000);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }

  inputChangeHandler = (inp) => {
    // const pName = event.target.value.trim();
    const pName = inp.trim();
    this.setState({ searchQuery: pName });
    if (pName) {
      this.getPokemon(pName);
    }
  };

  getPokemon(pName) {
    if (!pName) return;

    const { loading } = this.state;

    const url = new URL(BASE_URL);
    url.pathname = `${url.pathname}${ENDPOINTS.POKEMON}/${pName}`;
    url.searchParams.set(SEARCH_PARAMS.LIMIT, SEARCH_LIMIT);

    this.setState({
      loading: {
        ...loading,
        pokemon: true,
      },
    });

    axios.get(url.href)
    .then(({ data }) => {
      const pokemon = pokeResponseParser(data);
      this.setState({
        pokemon,
        loading: {
          ...loading,
          pokemon: false,
        },
      });
      this.getSpecies(data.species.url);
    })
    .catch(e => {
      console.error(e);
      this.setState({
        loading: {
          ...loading,
          pokemon: false,
        },
      });
    });
  };

  getSpecies(url) {
    const { pokemon, loading } = this.state;

    this.setState({
      loading: {
        ...loading,
        species: true,
      },
    });

    axios.get(url)
    .then(({ data }) => {
      const {
        evolution_chain,
        evolves_from_species,
        is_legendary,
        is_mythical,
        name,
      } = data;
      this.setState({
        pokemon: {
          ...pokemon,
          evolves_from: evolves_from_species?.name || '-',
          is_legendary,
          is_mythical,
        },
        loading: {
          ...loading,
          species: false,
        },
      });

      this.getEvolutionChain(evolution_chain.url, name);
    })
    .catch(e => {
      console.error(e);
      this.setState({
        loading: {
          ...loading,
          species: false,
        },
      });
    });
  }

  getEvolutionChain(url) {
    const { pokemon, loading } = this.state;

    this.setState({
      loading: {
        ...loading,
        evolutionChain: true,
      },
    });

    axios.get(url)
    .then(({ data }) => {
      const evolution_chain = evolvesChainParser(data.chain);
      this.setState({
        pokemon: {
          ...pokemon,
          evolution_chain,
        },
        loading: {
          ...loading,
          evolutionChain: false,
        },
      });
    })
    .catch(e => {
      console.error(e);
      this.setState({
        loading: {
          ...loading,
          evolutionChain: false,
        },
      });
    });
  }

  componentDidCatch(error,errorInfo) {
    console.error({ error, errorInfo });
  }

  render() {
    const { searchQuery } = this.state;

    const pokeContext = {
      ...this.state,
      showPokemon: this.inputChangeHandler,
    };

    return (
      <div id="app">
        <PokeContext.Provider value={pokeContext}>
          <div id="header-container">
            <img id="app-logo" src={pokeApi} alt="poke-api-logo" />
            <input
              id="poke-search-input"
              onChange={e => this.inputChangeHandler(e.target.value)}
              placeholder="Input Pokemon name or id"
              type="text"
              value={searchQuery}
            />
          </div>

          <PokeContainer />
        </PokeContext.Provider>
      </div>
    );
  }
}

export default App;
