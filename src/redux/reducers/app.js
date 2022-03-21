const defaultState = {
  loading: false,
  searchQuery: '',
};

const appReducer = (state = defaultState, actions) => {
  const { type, payload } = actions;

  switch(type) {
    case 'SAVE_LOADING_STATE': {
      return { ...state, loading: payload };
    }

    case 'SAVE_QUERY': {
      return {
        ...state,
        searchQuery: payload.searchQuery,
      };
    }

    default: return state;
  }
};

export default appReducer;
