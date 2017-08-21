import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/articleDetailActions';
import { IArticleDetailActions } from '../actions/articleDetailActions';
import { IArticleDetail } from '../reducers/articleDetailReducer';
import { IArticleTransformed, IAuthor } from '../../../interfaces/article';

class ArticleDetailPage extends React.PureComponent<IArticleDetailProps> {
  componentWillMount() {
    this.props.actions.fetchArticle(this.props.params.id);
  }

  render() {
    console.log('this.props', this.props);
    return (<div>
      asd
    </div>
    );
  }
}

interface IArticleDetailProps {
  actions: IArticleDetailActions;
  article: IArticleTransformed;
  authors: Array<IAuthor>;
  status: string;
  params: {
    id: string
  };
}

function mapStateToProps(state: any) {
  console.log('state', state);
  const articleDetail: IArticleDetail = state.articleList;
  return {
    article: articleDetail.article,
    authors: articleDetail.authors,
    status: articleDetail.status
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
)(ArticleDetailPage);
