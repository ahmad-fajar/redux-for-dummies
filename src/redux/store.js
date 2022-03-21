import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import { appReducer, pokemonReducer } from './reducers';

const rootReducer = combineReducers({
  app: appReducer,
  pokemon: pokemonReducer,
});

// redux devtools on chrome and firefox
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlware = composeEnhancer(
  applyMiddleware(thunk),
);

const store = createStore(rootReducer, middlware);

export default store;
