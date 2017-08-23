
import {changeAuthorName, changeMode, selectAuthor, showAuthorComments} from './articleListActions';
import {CHANGE_MODE, SELECT_AUTHOR, SHOW_AUTHOR_COMMENTS, CHANGE_AUTHOR_NAME} from '../../../constants/actionTypes';
describe('articleListActions', () => {

  it('should create an action to change mode', () => {
    const dispatch = jest.fn();
    const expected = {
      payload: 'comments',
      type: CHANGE_MODE
    };

    expect(typeof (changeMode('comments'))).toEqual('function');
    changeMode('comments')(dispatch);
    expect(dispatch).toBeCalledWith(expected);
  });

  it('should create an action to select author', () => {
    const dispatch = jest.fn();
    const expected = {
      payload: '1',
      type: SELECT_AUTHOR
    };

    expect(typeof (selectAuthor('1'))).toEqual('function');
    selectAuthor('1')(dispatch);
    expect(dispatch).toBeCalledWith(expected);
  });


  it('should create an action to show author comments', () => {
    const dispatch = jest.fn();
    const expected = {
      payload: '1',
      type: SHOW_AUTHOR_COMMENTS
    };

    expect(typeof (showAuthorComments('1'))).toEqual('function');
    showAuthorComments('1')(dispatch);
    expect(dispatch).toBeCalledWith(expected);
  });

  it('should create an action to change author name', () => {
    const dispatch = jest.fn();
    const authorId = '1';
    const newName = '12Polly Jane';
    const payload = {
      authorId,
      newName
    };
    const expected = {
      payload,
      type: CHANGE_AUTHOR_NAME
    };

    expect(typeof (changeAuthorName(authorId, newName))).toEqual('function');
    changeAuthorName(authorId, newName)(dispatch);
    expect(dispatch).toBeCalledWith(expected);
  });
});
