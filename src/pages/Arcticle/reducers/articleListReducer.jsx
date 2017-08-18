import { ARTICLES_SUCCESS, ARTICLES_LOADING } from '../../../constants/actionTypes';
import { getAuthors, normalazeArticles } from '../../../utils/articlesHelper';

export default function articleList(state = {articles: [], status: ARTICLES_LOADING}, action) {
  switch (action.type) {
    case ARTICLES_SUCCESS:
      return {
        ...state,
        articles: normalazeArticles(action.payload),
        authors: getAuthors(action.payload),
        status: ARTICLES_SUCCESS
      };

    case ARTICLES_LOADING:
      return {...state, articles: [], status: ARTICLES_LOADING};

    default:
      return state;
  }
}
