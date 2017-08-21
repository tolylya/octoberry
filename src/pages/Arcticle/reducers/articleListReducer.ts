import {
  ARTICLES_SUCCESS, ARTICLES_LOADING, CHANGE_MODE, SELECT_AUTHOR, SHOW_AUTHOR_COMMENTS, CHANGE_AUTHOR_NAME
} from '../../../constants/actionTypes';
import { getAuthors, getComments, normalizeArticles } from '../../../utils/articlesHelper';
import {IArticleTransformed, IAuthor, ICommentTransformed} from '../../../interfaces/article';

const cloneDeep = require('clone-deep');

const initialState: IArticleList = {
  articles: [],
  status: ARTICLES_LOADING,
  authors: [],
  selectedAuthorId: null,
  comments: [],
  mode: 'articles'
};

export default function articleList(state: IArticleList = initialState, action: any) {
  switch (action.type) {
    case ARTICLES_SUCCESS:
      return {
        ...state,
        articles: normalizeArticles(action.payload),
        authors: getAuthors(action.payload),
        comments: getComments(action.payload),
        status: ARTICLES_SUCCESS
      };

    case ARTICLES_LOADING:
      return {...state, articles: [], authors: [], comments: [], status: ARTICLES_LOADING};

    case CHANGE_MODE:
      return {...state, mode: action.payload};

    case SELECT_AUTHOR:
      return {...state, selectedAuthorId: action.payload};

    case SHOW_AUTHOR_COMMENTS:
      return {...state, selectedAuthorId: action.payload, mode: 'comments'};

    case CHANGE_AUTHOR_NAME:
      const newState = cloneDeep(state);
      const author = newState.authors.find((author: IAuthor) => author.id === action.payload.authorId);
      author.name = action.payload.newName;
      return newState;

    default:
      return state;
  }
}

export interface IArticleList {
  articles: Array<IArticleTransformed>;
  status: string;
  authors: Array<IAuthor>;
  selectedAuthorId: string;
  comments: Array<ICommentTransformed>;
  mode: string;
}
