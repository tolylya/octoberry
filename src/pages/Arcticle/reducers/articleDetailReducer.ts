import { ARTICLE_LOADING, ARTICLE_SUCCESS, UPDATE_COMMENT } from '../../../constants/actionTypes';
import { getAuthors, normalizeArticles } from '../../../utils/articlesHelper';
import { IArticleTransformed, IAuthor } from "../../../interfaces/article";

const cloneDeep = require('clone-deep');

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
        article: normalizeArticles([action.payload])[0],
        authors: getAuthors([action.payload]),
        status: ARTICLE_SUCCESS
      };

    case ARTICLE_LOADING:
      return {...state, article: null, authors: [], status: ARTICLE_LOADING};

    case UPDATE_COMMENT:
      const newState: IArticleDetail = cloneDeep(state);
      let changedAuthor: IAuthor = newState.authors.find((author: IAuthor) => author.id === action.payload.author.id);
      let changedComment = newState.article.comments.find(comment => comment.id === action.payload.comment.id);

      changedComment.text = action.payload.editedComment;
      changedAuthor.name = action.payload.editedAuthorName;

      return newState;

    default:
      return state;
  }
}

export interface IArticleDetail {
  article: IArticleTransformed;
  authors: Array<IAuthor>;
  status: string;
}
