import reducer, { initialState } from './articleDetailReducer'
import { ARTICLE_SUCCESS, ARTICLE_LOADING, UPDATE_COMMENT } from '../../../constants/actionTypes';
import { articles } from './articlesSource';
import { getAuthors, normalizeArticles } from '../../../utils/articlesHelper';

describe('Reducers::ArticleDetail', () => {

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };

    expect(reducer(undefined, action)).toEqual(initialState);
  });

  it('should handle ARTICLE_LOADING', () => {
    const action = { type: ARTICLE_LOADING };
    const expected: any = { ...initialState, article: null, authors: [], status: ARTICLE_LOADING };

    expect(reducer(initialState, action)).toEqual(expected);
  });

  it('should handle ARTICLE_SUCCESS', () => {
    const loadedArticle = articles[1];
    const expected: any = {
      ...initialState,
      article: normalizeArticles([loadedArticle])[0],
      authors: getAuthors([loadedArticle]),
      status: ARTICLE_SUCCESS
    };
    const action = { type: ARTICLE_SUCCESS, payload: loadedArticle };

    expect(reducer(initialState, action)).toEqual(expected);
  });

  it('should handle UPDATE_COMMENT', () => {
    const state = {
      status: ARTICLE_SUCCESS,
      authors: {'1': {
        id: '1',
        name: 'Polly Jane'
      }},
      article: {
        id: '1',
        author: '1',
        title: 'How I spent my summer',
        text: 'Few words about my summer story...',
        comments: [{
          id: '1',
          text: 'Paris is so cool!',
          commenter: '2'
        }]
      }
    };
    const action = {
      type: UPDATE_COMMENT,
      payload: {
        author: {
          id: '1',
          name: 'Polly Jane'
        },
        comment: {
          id: '1',
          text: 'Paris is so cool!',
          commenter: '2'
        },
        editedAuthorName: 'Polly Jane11',
        editedComment: 'Lol'
      }
    };
    const expected: any = {
      status: ARTICLE_SUCCESS,
      authors: {
        '1': {
          id: '1',
          name: 'Polly Jane11'
        }
      },
      article: {
        id: '1',
        author: '1',
        title: 'How I spent my summer',
        text: 'Few words about my summer story...',
        comments: [{
          id: '1',
          text: 'Lol',
          commenter: '2'
        }]
      }
    };

    expect(reducer(state, action)).toEqual(expected);
  });

});
