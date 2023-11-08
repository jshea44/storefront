'use strict';
import { createSlice } from '@reduxjs/toolkit';

const products = createSlice({
  name: 'products',
  initialState: {
    displayList: [],
    list: [
      {
        category: 'SHIRTS',
        name: 'T-Shirt 1',
        description: 'An athletic shirt!',
        price: 20,
        inventory: 10,
      },
      {
        category: 'SHOES',
        name: 'Running Shoes',
        description: 'Shoes for running!',
        price: 100,
        inventory: 5,
      },
      {
        category: 'PANTS',
        name: 'Athletic Pants',
        description: 'Pants for walking!',
        price: 50,
        inventory: 25,
      },
    ],
  },
  reducers: {
    filterProducts: (state, action) => {
      if (action.payload.name === 'ALL') {
        return state.list;
      }
      return state.list.filter(
        (product) => product.category === action.payload.name
      );
    },
  },
});

export const { filterProducts } = products.actions;

export default products.reducer;
