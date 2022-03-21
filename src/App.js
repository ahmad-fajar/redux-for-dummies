import React, { Component } from 'react';
import { connect } from 'react-redux';

import { debounce } from './utils';

import { getPokemon } from './services/apiCalls';

import PokeContainer from './components/PokeContainer';

import './App.css';

import pokeApi from './assets/pokeapi_256.png';

class App extends Component {
  constructor(props) {
    super(props);

    this.getPokemon = debounce(this.getPokemon.bind(this), 1000);
  }

  inputChangeHandler = (inp) => {
    const { saveSearchQuery } = this.props;
    const pName = inp.trim();
    saveSearchQuery(pName);
    this.getPokemon(pName);
  };

  getPokemon(pName) {
    if (!pName) return;
    this.props.fetchPokemon(pName);
  };

  componentDidCatch(error,errorInfo) {
    console.error({ error, errorInfo });
  }

  render() {
    const { searchQuery } = this.props;

    return (
      <div id="app">
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
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPokemon: pokeID => dispatch(getPokemon(pokeID)),
    saveSearchQuery: searchQuery => dispatch({
      type: 'SAVE_QUERY',
      payload: { searchQuery },
    }),
  };
};

const mapStateToProps = state => {
  const { app } = state;
  return {
    searchQuery: app.searchQuery,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
