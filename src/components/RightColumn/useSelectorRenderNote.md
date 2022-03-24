Returning a non-primitve as `useSelector` value may resultsin multiple renders, because each time `store` updated `useSelector` will called and return. When called, new object reference will created and trigger re-render despite there are probably no actual changes with its values.

In `RightColumn` component, weuse almost all `pokemonReducer` content/values. This can be used to see how `useSelector` with `primitives` and `object` value may affect re-render, and how to tackle if the needed-value has to be object.

Before start, make sure to do following changes to prevent re-render because parent components re-render.
- In `RightColumn.tsx`, prevent changes pokémon search query input when selecting pokémon's evolution path.
  ```jsx
  const showPokemon = pokeID => {
    console.log('dispatched using `useDispatch` hooks');
    dispatch(getPokemon(pokeID));
    /* comment this dispatch */
    // dispatch({
    //   type: 'SAVE_QUERY',
    //   payload: {
    //     searchQuery: pokeID,
    //   },
    // });
  };
  ```

- In `PokeContainer.tsx`. Disable pokémon name element from changing when new pokémon obtained.
  ```jsx
  // change from this
  // const species = undefined;
  const species = useSelector(state => state.pokemon.species);
  // const loading = false;
  const loading = useSelector(state => state.app.loading);

  // into this
  const species = undefined;
  // const species = useSelector(state => state.pokemon.species);
  const loading = false;
  // const loading = useSelector(state => state.app.loading);
  ```

Now alternate between these way of defining selector(s):
- Return whole object.
  ```jsx
  const {
    abilities,
    evolution_chain,
    evolves_from,
    height,
    id,
    is_legendary,
    is_mythical,
    species,
    stats,
    weight,
  } = useSelector(
    state => {
      const {
        pokemon: {
          abilities,
          evolution_chain,
          evolves_from,
          height,
          id,
          is_legendary,
          is_mythical,
          species,
          stats,
          weight,
        },
      } = state;
      return {
        abilities,
        evolution_chain,
        evolves_from,
        height,
        id,
        is_legendary,
        is_mythical,
        species,
        stats,
        weight,
      };
    },
  );
  ```

- One `useSelector` call fore each value.
  ```jsx
  const abilities = useSelector(({ pokemon }) => pokemon.abilities);
  const evolution_chain = useSelector(({ pokemon }) => pokemon.evolution_chain);
  const evolves_from = useSelector(({ pokemon }) => pokemon.evolves_from);
  const height = useSelector(({ pokemon }) => pokemon.height);
  const id = useSelector(({ pokemon }) => pokemon.id);
  const is_legendary = useSelector(({ pokemon }) => pokemon.is_legendary);
  const is_mythical = useSelector(({ pokemon }) => pokemon.is_mythical);
  const species = useSelector(({ pokemon }) => pokemon.species);
  const stats = useSelector(({ pokemon }) => pokemon.stats);
  const weight = useSelector(({ pokemon }) => pokemon.weight);
  ```

Now see how many times `RightColumn` re-render every time we click on pokémon's evolution path.

If the value really need to be object-like, provide `equalityFn` to tell when `useSelector` need to re-render. `useSelector` will re-render if  `equalityFn` return `true`.
```jsx
import { shallowEqual } from 'react-redux'

// syntax
const someObject = useSelector(state => state.someKey, equalityFn);

const {
  abilities,
  /*...*/
  weight,
} = useSelector(
  state => {
    const {
      pokemon: {
        /*...*/
      },
    } = state;
    return {
      abilities,
      /*...*/
      weiight,
    };
  },

  /* for `equalityFn`, can choose either provide your own function */
  /* or use `shallowEqual` */

  // based on specific key(s)
  // (next, prev) => next.id === prev.id,

  // or use `shallowEqual`
  shallowEqual,
);
```
