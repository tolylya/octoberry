import reducer, { initialState } from './articleListReducer'
import { ARTICLES_LOADING, ARTICLES_SUCCESS, CHANGE_MODE, SELECT_AUTHOR, SHOW_AUTHOR_COMMENTS, CHANGE_AUTHOR_NAME,
  UPDATE_COMMENT } from '../../../constants/actionTypes';

describe('Reducers::ArticleList', () => {
  const articles = [{
    'id': '1',
    'author': {
      'id': '1',
      'name': 'Polly Jane'
    },
    'title': 'How I spent my summer',
    'text': 'Few words about my summer story...',
    'comments': [{
      'id': '1',
      'text': 'Paris is so cool!',
      'commenter': {
        'id': '2',
        'name': 'John Galt'
      }
    }]
  }];

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };

    expect(reducer(undefined, action)).toEqual(initialState);
  });

  it('should handle ARTICLES_LOADING', () => {
    const action = { type: ARTICLES_LOADING };
    const expected: any = {...initialState, status: ARTICLES_LOADING};

    expect(reducer(initialState, action)).toEqual(expected);
  });

  it('should handle ARTICLES_SUCCESS', () => {
    const action = { type: ARTICLES_SUCCESS, payload: articles };
    const expected: any = {
      ...initialState,
      status: ARTICLES_SUCCESS,
      articles: [{
        'id': '1',
        'author': '1',
        'title': 'How I spent my summer',
        'text': 'Few words about my summer story...',
        'comments': [{
          'id': '1',
          'text': 'Paris is so cool!',
          'commenter': '2'
        }]
      }],
      authors: [{
        'id': '1',
        'name': 'Polly Jane'
      }, {
        'id': '2',
        'name': 'John Galt'
      }],
      comments: [{
        'id': '1',
        'text': 'Paris is so cool!',
        'commenter': '2'
      }]
    };

    expect(reducer(initialState, action)).toEqual(expected);
  });

  it('should handle CHANGE_MODE', () => {
    const action = { type: CHANGE_MODE, payload: 'comments' };
    const expected: any = {...initialState, mode: 'comments'};

    expect(reducer(initialState, action)).toEqual(expected);
  });

  it('should handle SELECT_AUTHOR', () => {
    const action = { type: SELECT_AUTHOR, payload: '2' };
    const expected: any = {...initialState, selectedAuthorId: '2'};

    expect(reducer(initialState, action)).toEqual(expected);
  });

  it('should handle SHOW_AUTHOR_COMMENTS', () => {
    const action = { type: SHOW_AUTHOR_COMMENTS, payload: '2' };
    const expected: any = {...initialState, selectedAuthorId: '2', mode: 'comments'};

    expect(reducer(initialState, action)).toEqual(expected);
  });

  it('should handle CHANGE_AUTHOR_NAME', () => {
    const state = {
      ...initialState,
      authors: [{
        'id': '2',
        'name': 'Polly Jane'
      }],
      mode: 'comments'
    };
    const action = {
      type: CHANGE_AUTHOR_NAME,
      payload: {
        authorId: '2',
        newName: 'Lol'
      }
    };
    const expected = {
      ...initialState,
      authors: [{
        'id': '2',
        'name': 'Lol'
      }],
      mode: 'comments'
    };

    expect(reducer(state, action)).toEqual(expected);
  });

  it('should handle UPDATE_COMMENT', () => {
    const state: any = {
      ...initialState,
      articles,
      authors: [{
        id: '1',
        name: 'Polly Jane'
      }],
      comments: [{
        id: '1',
        text: 'Paris is so cool!',
        commenter: '2'
      }]
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
    const expected = {
      ...initialState,
      articles,
      authors: [{
        id: '1',
        name: 'Polly Jane11'
      }],
      comments: [{
        id: '1',
        text: 'Lol',
        commenter: '2'
      }]
    };

    expect(reducer(state, action)).toEqual(expected);
  });

});
