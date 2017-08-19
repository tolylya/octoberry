import * as React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { IArticleTransformed, IAuthor } from '../../../interfaces/article';

const men = require('./../imgs/1.png');
const girl = require('./../imgs/2.png');

class Article extends React.PureComponent<IArticleProps> {

  showAuthorComments = () => {
    this.props.showAuthorComments(this.props.author.id);
  };

  render() {
    const { author, title, text, comments } = this.props.article;
    const articleAuthor = this.props.author;

    return (
      <Card className="inline-block mr-xs mb-xs">
        <Image src={author === '2' ? men : girl} />
        <Card.Content>
          <Card.Header as="a">
            <span onClick={this.showAuthorComments}>
              {articleAuthor.name}
            </span>
          </Card.Header>
          <Card.Meta>{title}</Card.Meta>
          <Card.Description>{text}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='comment' />
              {comments.length} Comments
          </a>
        </Card.Content>
      </Card>
    );
  }
}

interface IArticleProps {
  article: IArticleTransformed;
  author: IAuthor;
  showAuthorComments: Function;
}

export default Article;
