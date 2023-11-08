// store
import { createStore, combineReducers } from 'redux';

import categoryReducer from '../store/categories';
import productReducer from '../store/products';

const reducer = combineReducers({
  categories: categoryReducer,
  products: productReducer,
});

export default createStore(reducer);
