// store
import { createStore, combineReducers } from 'redux';

import categoryReducer from '../store/categories';

let reducer = combineReducers({ categories: categoryReducer });

export default createStore(reducer);
