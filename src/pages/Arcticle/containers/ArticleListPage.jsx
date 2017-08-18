import React from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions/articleActions.jsx';
import Article from '../components/Article.jsx';
import { ARTICLES_SUCCESS } from '../../../constants/actionTypes';
import { Grid, Header, Icon, Loader } from 'semantic-ui-react';

class ArticleListPage extends React.PureComponent {

  componentWillMount() {
    this.props.actions.fetchArticles();
  }

  render() {
    console.log('props', this.props.articleList);
    const { status, articles } = this.props.articleList;
    let component;
    if (status === ARTICLES_SUCCESS && !articles.length) {
      component = (
        <div className="pt-xs">
          Articles not found
        </div>
      );
    } else if (status === ARTICLES_SUCCESS) {
      component = (
        articles.map(article => <Article key={article.id} article={article}/>)
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

ArticleListPage.propTypes = {
  actions: PropTypes.object.isRequired,
  articleList: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    articleList: state.articleList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleListPage);
