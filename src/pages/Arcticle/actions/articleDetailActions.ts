import { ARTICLE_LOADING, ARTICLE_SUCCESS, UPDATE_COMMENT } from '../../../constants/actionTypes';
import { articles } from '../reducers/articlesSource';
import { ICommentEditing } from '../components/Comment';

export function fetchArticle(articleId: string) {
  return (dispatch: any) => {
    dispatch({
      type: ARTICLE_LOADING
    });
    setTimeout(() => {
      dispatch({
        type: ARTICLE_SUCCESS,
        payload: articles.find(article => article.id === articleId)
      });
    }, 500);
  };
}

export function updateComment(editing: ICommentEditing) {
  return (dispatch: any) => {
    dispatch({
      type: UPDATE_COMMENT,
      payload: editing
    });
  };
}
