import { ARTICLE_LOADING, ARTICLE_SUCCESS } from '../../../constants/actionTypes';
import { articles } from '../reducers/articlesSource';

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
