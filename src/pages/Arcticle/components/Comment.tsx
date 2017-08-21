import * as React from 'react';
import { Comment } from 'semantic-ui-react';
import { IAuthor, ICommentTransformed } from '../../../interfaces/article';

const men = require('./../imgs/1.png');
const girl = require('./../imgs/2.png');

class CommentComponent extends React.PureComponent<ICommentProps> {

  render() {
    const { comments, authors } = this.props;
    console.log(1, comments, authors);

    return (
      <Comment.Group>
        {comments.map(comment => {
          const author = authors.find(author => author.id === comment.commenter);

          return (
            <Comment key={comment.id}>
              <Comment.Avatar as='a' src={comment.commenter === '2' ? men : girl} />
              <Comment.Content>
                <Comment.Author as='a'>{author.name}</Comment.Author>
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
        })}
      </Comment.Group>
    );
  }
}

interface ICommentProps {
  comments: Array<ICommentTransformed>;
  authors: Array<IAuthor>
}

export default CommentComponent;
