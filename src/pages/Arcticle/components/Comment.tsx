import * as React from 'react';
import {IComment} from '../../../interfaces/article';
import {Comment} from 'semantic-ui-react';

const men = require('./../imgs/1.png');
const girl = require('./../imgs/2.png');

class CommentComponent extends React.PureComponent<ICommentProps> {

  render() {
    const comment = this.props.comment;
    return (
      <Comment>
        <Comment.Avatar as='a' src={comment.commenter.id === '2' ? men : girl} />
        <Comment.Content>
          <Comment.Author as='a'>{comment.commenter.name}</Comment.Author>
          <Comment.Metadata>
            <span>Today at 5:42PM</span>
          </Comment.Metadata>
          <Comment.Text>{comment.text}</Comment.Text>
          <Comment.Actions>
            <a>Reply</a>
          </Comment.Actions>
        </Comment.Content>
      </Comment>
    );
  }
}

interface ICommentProps {
  comment: IComment;
}

export default CommentComponent;
