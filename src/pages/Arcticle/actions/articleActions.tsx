import * as types from '../../../constants/actionTypes';
import { articles } from '../reducers/articlesSource';

export function fetchArticles() {
  return (dispatch: any) => {
    console.log('ARTICLES_LOADING');
    dispatch({
      type: types.ARTICLES_LOADING
    });
    setTimeout(() => {
      console.log('ARTICLES_SUCCESS');
      dispatch({
        type: types.ARTICLES_SUCCESS,
        payload: articles
      });
    }, 1500);
  };
}
