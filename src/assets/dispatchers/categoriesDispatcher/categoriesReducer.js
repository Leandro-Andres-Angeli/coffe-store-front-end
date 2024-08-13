export const initialState = {
  result: [],
  loading: false,
  success: false,
  done: false,
};
const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'loading':
      return { ...state, loading: true };
    case 'load':
      return action.payload;

    default:
      return state;
  }
};
export default categoriesReducer;
