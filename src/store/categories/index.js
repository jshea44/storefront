'use strict';

const initialState = {
  selectedCategory: 'Item One',
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_SELECTED_CATEGORY':
      return {
        ...state,
        selectedCategory: payload,
      };
    default:
      return state;
  }
};

// action
export const setSelectedCategory = (category) => {
  return {
    type: 'SET_SELECTED_CATEGORY',
    payload: category,
  };
};

export default reducer;
