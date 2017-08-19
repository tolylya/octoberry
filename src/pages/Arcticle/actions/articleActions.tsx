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

export function changeMode(value: string) {
  return (dispatch: any) => {
    dispatch({
      type: types.CHANGE_MODE,
      payload: value
    });
  }
}

export function selectAuthor(authorId: string | null) {
  return (dispatch: any) => {
    dispatch({
      type: types.SELECT_AUTHOR,
      payload: authorId
    });
  }
}

export interface IArticleActions {
  fetchArticles: Function;
  changeMode: Function;
  selectAuthor: Function;
}
