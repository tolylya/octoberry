import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid, Header, Icon, Loader } from 'semantic-ui-react';
import * as actions from '../actions/articleActions';
import Article from '../components/Article';
import { ARTICLES_SUCCESS } from '../../../constants/actionTypes';
import { IArticleTransformed, IAuthor } from '../../../interfaces/article';
import Sidebar from '../components/Sidebar';
import { IArticleActions } from '../actions/articleActions';
import { IArticleList } from "../reducers/articleListReducer";

class ArticleListPage extends React.PureComponent<IArticleListProps> {
  componentWillMount() {
    this.props.actions.fetchArticles();
  }

  render() {
    const { status, articles, authors, mode } = this.props;
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
          return (
              <Article key={article.id} article={article} author={author} />
          );
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
          <Grid.Column width={13}>
            { component }
          </Grid.Column>
          <Grid.Column width={3}>
            <Sidebar
              authors={authors}
              mode={mode}
              changeMode={this.props.actions.changeMode}
              selectAuthor={this.props.actions.selectAuthor}
            />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

interface IArticleListProps {
  status: string;
  articles: Array<IArticleTransformed>;
  authors: Array<IAuthor>;
  actions: IArticleActions;
  mode: string;
  selectedAuthorId: string;
}

function mapStateToProps(state: any) {
  const articleList: IArticleList = state.articleList;
  return {
    status: articleList.status,
    articles: articleList.selectedAuthorId ?
      articleList.articles.filter(article => article.author === articleList.selectedAuthorId) : articleList.articles,
    authors: articleList.authors,
    mode: articleList.mode,
    selectedAuthorId: articleList.selectedAuthorId
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
