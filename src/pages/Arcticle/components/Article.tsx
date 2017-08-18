import * as React from 'react';
import { Card, Icon, Image, Grid } from 'semantic-ui-react';
import {IArticleTransformed} from "../../../interfaces/article";
const men = require('./../imgs/1.png');
const girl = require('./../imgs/2.png');

class Article extends React.PureComponent<IArticleProps> {
  render() {
    console.log('article props', this.props);
    const props: any = this.props;
    const { author } = props.article;
    return (
      <Grid.Column width={4}>
        <Card>
          <Image src={author === '2' ? girl : men} />
          <Card.Content>
            <Card.Header>Polly Jane</Card.Header>
            <Card.Meta>How I spent my summer</Card.Meta>
            <Card.Description>Few words about my summer story...</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='comment' />
              10 Comments
            </a>
          </Card.Content>
        </Card>
      </Grid.Column>
    );
  }
}

interface IArticleProps {
  article: IArticleTransformed;
}

export default Article;
