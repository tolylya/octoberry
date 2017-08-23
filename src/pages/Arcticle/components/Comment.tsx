import * as React from 'react';
import { Comment, Modal, Button, Icon, Input } from 'semantic-ui-react';
import { IAuthor, ICommentTransformed } from '../../../interfaces/article';

const men = require('./../imgs/1.png');
const girl = require('./../imgs/2.png');

class CommentComponent extends React.PureComponent<ICommentProps, ICommentState> {

  state: ICommentState = { modalOpened: false };
  editing: ICommentEditing = {
    author: null,
    comment: null,
    editedAuthorName: '',
    editedComment: ''
  };

  openModal = (author: IAuthor, comment: ICommentTransformed) => () => {
    this.editing = { author, comment, editedAuthorName: author.name, editedComment: comment.text };
    this.setState({ modalOpened: true });
  };

  updateComment = () => {
    this.setState({ modalOpened: false });
    this.props.updateComment(this.editing);
  };

  closeModal = () => {
    this.setState({ modalOpened: false });
  };

  render() {
    const { comments, authors } = this.props;
    const { modalOpened } = this.state;
    const authorsObj: any = {};

    for (const author of authors) {
      authorsObj[author.id] = author;
    }

    return (
      <Comment.Group>
        {comments.map((comment) => {
          const author = authorsObj[comment.commenter];

          return (
            <Comment key={comment.id}>
              <Comment.Avatar as="a" src={comment.commenter === '2' ? men : girl} />
              <Comment.Content>
                <Comment.Author as="a">
                  <span onClick={this.openModal(author, comment)} className="pointer">
                    <Icon disabled name="pencil" />
                    {author.name}
                  </span>
                </Comment.Author>
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
        <Modal dimmer="blurring" open={modalOpened} onClose={this.closeModal}>
          <Modal.Header>Edit</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Input
                label="Author name"
                className="mr-xs"
                defaultValue={this.editing.author && this.editing.author.name}
                onChange={(e,{ value }) => {this.editing.editedAuthorName = value}}
              />
              <Input
                label="Comment"
                defaultValue={this.editing.comment && this.editing.comment.text}
                onChange={(e,{ value }) => {this.editing.editedComment = value}}
              />
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color="black" onClick={this.closeModal}>
              Nope
            </Button>
            <Button positive icon="checkmark" labelPosition="right" content="Save" onClick={this.updateComment} />
          </Modal.Actions>
        </Modal>
      </Comment.Group>
    );
  }
}

interface ICommentProps {
  comments: Array<ICommentTransformed>;
  authors: Array<IAuthor>
  updateComment: Function;
}

interface ICommentState {
  modalOpened: boolean;
}

export interface ICommentEditing {
  comment: ICommentTransformed;
  author: IAuthor;
  editedAuthorName: string;
  editedComment: string;
}

export default CommentComponent;
