import axios from 'axios';
import React, { Component } from 'react';

import { cloneObject, debounce } from './utils';

import {
  BASE_URL,
  ENDPOINTS,
  POKE_DEFAULT_STATE,
  POKE_DUMMY_RESP,
  SEARCH_LIMIT,
  SEARCH_PARAMS,
} from './constants';

import PokeContainer from './components/PokeContainer';

import './App.css';

import pokeApi from './assets/pokeapi_256.png';
import dummy from './dummy.json';

import { pokeResponseParser } from './appHelper';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      pokemon: cloneObject(POKE_DEFAULT_STATE),
      // pokemon: dummy,
    };

    this.getPokemonList = debounce(this.getPokemonList.bind(this), 1000);
    // this.getPokemonList = debounce(this.getPokemonList, 1000).bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }

  inputChangeHandler = (event) => {
    const pName = event.target.value.trim();
    this.setState({ searchQuery: pName });
    if (pName) {
      this.getPokemonList(pName);
    }
  };

  getPokemonList(pName) {
    if (!pName) return;

    const url = new URL(BASE_URL);
    url.pathname = `${url.pathname}${ENDPOINTS.POKEMON}/${pName}`;
    url.searchParams.set(SEARCH_PARAMS, SEARCH_LIMIT);

    axios.get(url.href)
    .then(({ data }) => {
      this.setState({ pokemon: pokeResponseParser(data) });
    })
    .catch(console.error);
  };

  componentDidCatch(error,errorInfo) {
    console.error({ error, errorInfo });
  }

  render() {
    const {
      pokemon,
      searchQuery,
    } = this.state;
    console.log({ pokemon });

    return (
      <div id="app">
        <div id="header-container">
          <img id="app-logo" src={pokeApi} alt="poke-api-logo" />
          <input
            id="poke-search-input"
            onChange={this.inputChangeHandler}
            placeholder="Input Pokemon name or id"
            type="text"
            value={searchQuery}
          />
        </div>

        <PokeContainer pokemon={pokemon} />
      </div>
    );
  }
}

export default App;
