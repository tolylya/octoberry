import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid, Header, Icon, Loader } from 'semantic-ui-react';
import * as actions from '../actions/articleActions';
import Article from '../components/Article';
import { ARTICLES_SUCCESS } from '../../../constants/actionTypes';
import { IArticleTransformed, IAuthor } from '../../../interfaces/article';

class ArticleListPage extends React.PureComponent<IArticleListProps> {

  componentWillMount() {
    this.props.actions.fetchArticles();
  }

  render() {
    const { status, articles, authors } = this.props;
    let component;

    if (status === ARTICLES_SUCCESS && !articles.length) {
      component = (
        <div className="pt-xs">
          Articles not found
        </div>
      );
    } else if (status === ARTICLES_SUCCESS) {
      component = (
        articles.map(article => {
          const author = authors.find(author => author.id === article.author);
          return <Article key={article.id} article={article} author={author} />;
        })
      );
    } else {
      component = <Loader active inline='centered' />;
    }

    return (
      <div className="pt-xs">
        <Header as='h2'>
          <Icon name='tags' />
          <Header.Content>
            Articles
          </Header.Content>
        </Header>
        <Grid>
          { component }
        </Grid>
      </div>
    );
  }
}

interface IArticleListProps {
  status: string;
  articles: Array<IArticleTransformed>;
  authors: Array<IAuthor>;
  actions: any;
}

function mapStateToProps(state: any) {
  return {
    status: state.articleList.status,
    articles: state.articleList.articles,
    authors: state.articleList.authors
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    actions: bindActionCreators<any>(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleListPage);
