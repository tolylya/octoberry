import { articles } from '../reducers/articlesSource';
import {
  ARTICLES_LOADING, ARTICLES_SUCCESS, CHANGE_AUTHOR_NAME, CHANGE_MODE, SELECT_AUTHOR,
  SHOW_AUTHOR_COMMENTS
} from '../../../constants/actionTypes';

export function fetchArticles() {
  return (dispatch: any) => {
    dispatch({
      type: ARTICLES_LOADING
    });
    setTimeout(() => {
      dispatch({
        type: ARTICLES_SUCCESS,
        payload: articles
      });
    }, 500);
  };
}

export function changeMode(value: string) {
  return (dispatch: any) => {
    dispatch({
      type: CHANGE_MODE,
      payload: value
    });
  }
}

export function selectAuthor(authorId: string | null) {
  return (dispatch: any) => {
    dispatch({
      type: SELECT_AUTHOR,
      payload: authorId
    });
  }
}

export function showAuthorComments(authorId: string) {
  return (dispatch: any) => {
    dispatch({
      type: SHOW_AUTHOR_COMMENTS,
      payload: authorId
    });
  }
}

export function changeAuthorName(authorId: string, newName: string) {
  return (dispatch: any) => {
    dispatch({
      type: CHANGE_AUTHOR_NAME,
      payload: { authorId, newName }
    });
  }
}

export interface IArticleListActions {
  fetchArticles: Function;
  changeMode: Function;
  selectAuthor: Function;
  showAuthorComments: Function;
  changeAuthorName: Function;
}
