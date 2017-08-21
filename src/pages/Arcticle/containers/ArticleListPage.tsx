import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid, Header, Icon, Loader } from 'semantic-ui-react';
import Article from '../components/ArticleCard';
import Sidebar from '../components/Sidebar';
import CommentComponent from '../components/Comment';
import {
  showAuthorComments, selectAuthor, changeAuthorName, changeMode, fetchArticles
} from '../actions/articleListActions';
import { IArticleList } from '../reducers/articleListReducer';
import { ARTICLES_SUCCESS } from '../../../constants/actionTypes';
import { IArticleTransformed, IAuthor, ICommentTransformed } from '../../../interfaces/article';
import { updateComment } from '../actions/articleDetailActions';

class ArticleListPage extends React.PureComponent<IArticleListProps> {
  componentWillMount() {
    this.props.actions.fetchArticles();
  }

  render() {
    const { status, articles, authors, mode, comments } = this.props;
    let component;

    if (status === ARTICLES_SUCCESS && !articles.length) {
      component = (
        <div>
          Articles not found
        </div>
      );
    } else if (status === ARTICLES_SUCCESS) {
      if (mode === 'articles') {
        component = (
          articles.map(article => {
            const author = authors.find(author => author.id === article.author);
            return (
              <Article
                key={article.id}
                article={article}
                author={author}
                showAuthorComments={this.props.actions.showAuthorComments}
                changeAuthorName={this.props.actions.changeAuthorName}
              />
            );
          })
        );
      } else if (mode === 'comments') {
        component = (
          <CommentComponent comments={comments} authors={authors} updateComment={this.props.actions.updateComment} />
        );
      }
    } else {
      component = <Loader active inline='centered' />;
    }

    return (
      <div>
        <Header as='h2' dividing>
          <Icon name={mode==='comments'?'comments':'tags'} />
          <Header.Content className="capitalize">
            {mode}
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
              selectedAuthorId={this.props.selectedAuthorId}
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
  actions: {
    showAuthorComments: Function;
    selectAuthor: Function;
    changeAuthorName: Function;
    changeMode: Function;
    fetchArticles: Function;
    updateComment: Function;
  };
  comments: Array<ICommentTransformed>;
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
    comments: articleList.selectedAuthorId ?
      articleList.comments.filter(comment => comment.commenter === articleList.selectedAuthorId) : articleList.comments,
    selectedAuthorId: articleList.selectedAuthorId
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    actions: bindActionCreators<any>({
      showAuthorComments, selectAuthor, changeAuthorName, changeMode, fetchArticles, updateComment
    }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleListPage);
