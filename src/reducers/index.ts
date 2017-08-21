import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import articleList from '../pages/Arcticle/reducers/articleListReducer';
import articleDetail from '../pages/Arcticle/reducers/articleDetailReducer';

const rootReducer = combineReducers({
  articleList,
  articleDetail,
  routing: routerReducer
});

export default rootReducer;
