import * as React from 'react';
import { Link } from 'react-router';
import { Card, Icon, Image } from 'semantic-ui-react';
import { IArticleTransformed, IAuthor } from '../../../interfaces/article';

const men = require('./../imgs/1.png');
const girl = require('./../imgs/2.png');

class Article extends React.PureComponent<IArticleProps> {

  state = { modalOpened: false, editingName: false };

  inputOfAuthorName: any;

  handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      this.props.changeAuthorName(this.props.author.id, this.inputOfAuthorName.value);
      this.toggleEditAuthorName();
    } else if (e.key === 'Escape') {
      this.toggleEditAuthorName();
    }
  };

  showAuthorComments = () => {
    this.props.showAuthorComments(this.props.author.id);
  };

  toggleEditAuthorName = () => {
    this.setState({editingName: !this.state.editingName});
  };

  render() {
    const { author, title, text, comments, id } = this.props.article;
    const articleAuthor = this.props.author;
    let authorName;

    if (this.state.editingName) {
      authorName = (
        <div className="ui input mini">
          <input
            type="text"
            defaultValue={this.props.author.name}
            autoFocus
            ref={(input) => this.inputOfAuthorName = input}
            onBlur={this.toggleEditAuthorName}
            onKeyUp={this.handleKeyPress}
          />
        </div>
      );
    } else {
      authorName = (
        <span>
          <span onClick={this.toggleEditAuthorName}>
            <Icon name='edit' />
          </span>
          <span onClick={this.showAuthorComments}>
            {articleAuthor.name}
          </span>
        </span>
      );
    }

    return (
      <Card className="inline-block mr-xs mb-xs mt-xs">
        <Image src={author === '2' ? men : girl} />
        <Card.Content className="min-height-content">
          <Card.Header as="a">
            {authorName}
          </Card.Header>
          <Card.Meta>{title}</Card.Meta>
          <Card.Description>{text}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link to={`/articles/${id}`}>
            <Icon name='comment' />
            {comments.length} Comments
          </Link>
        </Card.Content>
      </Card>
    );
  }
}

interface IArticleProps {
  article: IArticleTransformed;
  author: IAuthor;
  showAuthorComments: Function;
  changeAuthorName: Function;
}

export default Article;
