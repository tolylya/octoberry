import {ARTICLES_SUCCESS, ARTICLES_LOADING, CHANGE_MODE, SELECT_AUTHOR} from '../../../constants/actionTypes';
import { getAuthors, normalizeArticles } from '../../../utils/articlesHelper';
import { IArticleTransformed, IAuthor } from "../../../interfaces/article";

const initialState: IArticleList = {
  articles: [],
  status: ARTICLES_LOADING,
  authors: [],
  selectedAuthorId: null,
  mode: 'articles'
};

export default function articleList(state: IArticleList = initialState, action: any) {
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

    case CHANGE_MODE:
      return {...state, mode: action.payload};

    case SELECT_AUTHOR:
      return {...state, selectedAuthorId: action.payload};

    default:
      return state;
  }
}

export interface IArticleList {
  articles: Array<IArticleTransformed>;
  status: string;
  authors: Array<IAuthor>;
  selectedAuthorId: string;
  mode: string;
}
