import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Loader, Header, Grid } from 'semantic-ui-react';
import { fetchArticle } from '../actions/articleDetailActions';
import { changeAuthorName, showAuthorComments } from '../actions/articleListActions';
import { IArticleDetail } from '../reducers/articleDetailReducer';
import { IArticleTransformed, IAuthor } from '../../../interfaces/article';
import { ARTICLE_LOADING, ARTICLE_SUCCESS } from '../../../constants/actionTypes';
import CommentComponent from '../components/Comment';

class ArticleDetailPage extends React.PureComponent<IArticleDetailProps> {

  componentWillMount() {
    this.props.actions.fetchArticle(this.props.params.id);
  }

  render() {
    const { article, authors, status } = this.props;
    let component;

    if (status === ARTICLE_LOADING) {
      component = (<Loader active inline='centered' />);
    } else if (status === ARTICLE_SUCCESS && !article) {
      component = (<div>Article was not found</div>);
    } else if (status === ARTICLE_SUCCESS && article) {
      component = (
        <Grid>
          <Grid.Column width={10}>
            <Header size="huge" dividing>{article.title}</Header>
            {article.text}
          </Grid.Column>
          <Grid.Column width={6}>
            <CommentComponent comments={article.comments} authors={authors} />
          </Grid.Column>
        </Grid>
      );
    }

    return component;
  }
}

interface IArticleDetailProps {
  actions: {
    fetchArticle: Function;
    changeAuthorName: Function;
    showAuthorComments: Function;
  };
  article: IArticleTransformed;
  authors: Array<IAuthor>;
  status: string;
  params: {
    id: string
  };
}

function mapStateToProps(state: any) {
  const articleDetail: IArticleDetail = state.articleDetail;

  return {
    article: articleDetail.article,
    authors: articleDetail.authors,
    status: articleDetail.status
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    actions: bindActionCreators<any>({
      fetchArticle, changeAuthorName, showAuthorComments
    }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleDetailPage);
