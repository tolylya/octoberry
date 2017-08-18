import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import {routerReducer} from 'react-router-redux';
import articleList from '../pages/Arcticle/reducers/articleListReducer.jsx';

const rootReducer = combineReducers({
  fuelSavings,
  articleList,
  routing: routerReducer
});

export default rootReducer;
