import { ARTICLES_SUCCESS, ARTICLES_LOADING } from '../../../constants/actionTypes';
import { getAuthors, normalizeArticles } from '../../../utils/articlesHelper';

export default function articleList(state: any = {articles: [], status: ARTICLES_LOADING}, action: any) {
  switch (action.type) {
    case ARTICLES_SUCCESS:
      return {
        ...state,
        articles: normalizeArticles(action.payload),
        authors: getAuthors(action.payload),
        status: ARTICLES_SUCCESS
      };

    case ARTICLES_LOADING:
      return {...state, articles: [], status: ARTICLES_LOADING};

    default:
      return state;
  }
}
