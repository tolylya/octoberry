import React from 'react';
import { Card, Icon, Image, Grid } from 'semantic-ui-react';
import men from './../imgs/1.png';
import girl from './../imgs/2.png';
import '../css/Arcticle.css';

class Article extends React.PureComponent {
  render() {
    console.log('article props', this.props);
    return (
      <Grid.Column width={4}>
        <Card>
          <Image src={men} />
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

export default Article;
