import { ARTICLE_LOADING, ARTICLE_SUCCESS } from '../../../constants/actionTypes';
import { getAuthors, normalizeArticles } from '../../../utils/articlesHelper';
import { IArticleTransformed, IAuthor } from "../../../interfaces/article";

const initialState: IArticleDetail = {
  status: ARTICLE_LOADING,
  authors: [],
  article: null
};


export default function articleDetail(state: IArticleDetail = initialState, action: any) {
  switch (action.type) {
    case ARTICLE_SUCCESS:
      return {
        ...state,
        article: normalizeArticles([action.payload]),
        authors: getAuthors([action.payload]),
        status: ARTICLE_SUCCESS
      };

    default:
      return state;
  }
}

export interface IArticleDetail {
  article: IArticleTransformed;
  authors: Array<IAuthor>;
  status: string;
}