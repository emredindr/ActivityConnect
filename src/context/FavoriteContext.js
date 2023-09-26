import createDataContext from './createDataContext';

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'add_favorite':
      return [...state, action.payload];
    case 'remove_favorite':
      state = state.filter(activity => activity.id !== action.payload.id);
      return state;
    case 'clear_favorites':
      return [];
    default:
      return state;
  }
};

const addFavorite = dispacth => activitiy => {
  dispacth({type: 'add_favorite', payload: activitiy});
};

const removeFavorite = dispacth => activitiy => {
  dispacth({type: 'remove_favorite', payload: activitiy});
};

const clearFavorites = dispacth => () => {
  dispacth({type: 'clear_favorites'});
};

export const {Context, Provider} = createDataContext(favoriteReducer, {addFavorite, removeFavorite, clearFavorites}, []);
