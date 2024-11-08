export const initialState = null;
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'login':
      return action.payload;
    case 'logout':
      console.log('out');

      return initialState;
    case 'addToFavorites':
      return { ...state, favorites: [...state.favorites, action.payload] };

    default:
      return state;
  }
};
