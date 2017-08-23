import { ARTICLE_LOADING, ARTICLE_SUCCESS, UPDATE_COMMENT } from '../../../constants/actionTypes';
import { fetchArticle, updateComment } from './articleDetailActions';

describe('articleDetailActions', () => {

  it('should create an action to update comment', () => {
    const payload = {
      author: {
        id: '1',
        name: 'Polly Jane'
      },
      comment: {
        id: '3',
        text: 'Ohohoho!',
        commenter: '1'
      },
      editedAuthorName: 'Polly Jan2e',
      editedComment: 'Ohohoho!'
    };
    const dispatch = jest.fn();
    const expected = {
      payload,
      type: UPDATE_COMMENT
    };

    expect(typeof (updateComment(payload))).toEqual('function');
    updateComment(payload)(dispatch);
    expect(dispatch).toBeCalledWith(expected);
  });
});
