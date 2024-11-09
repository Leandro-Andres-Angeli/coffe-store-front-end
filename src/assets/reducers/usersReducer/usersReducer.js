export const initialState = null;
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'login':
      return action.payload;
    case 'logout':
      console.log('out');

      return initialState;
    case 'pushFavorites':
      return { ...state, favorites: [...state.favorites, action.payload] };
    case 'pullFavorites':
      console.log('in');

      return {
        ...state,
        favorites: state.favorites.filter((el) => el.id !== action.payload.id),
      };

    default:
      return state;
  }
};
