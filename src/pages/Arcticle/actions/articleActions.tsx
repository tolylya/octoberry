import * as types from '../../../constants/actionTypes';
import { articles } from '../reducers/articlesSource';

export function fetchArticles() {
  return (dispatch: any) => {
    dispatch({
      type: types.ARTICLES_LOADING
    });
    setTimeout(() => {
      dispatch({
        type: types.ARTICLES_SUCCESS,
        payload: articles
      });
    }, 1500);
  };
}
