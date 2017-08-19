import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ArticleDetailPage extends React.PureComponent<IArticleDetailProps> {
  componentWillMount() {

  }

  render() {
    return (<div>
      asd
    </div>
    );
  }
}

interface IArticleDetailProps {

}

function mapStateToProps(state: any) {
  return {

  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    // actions: bindActionCreators<any>(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleDetailPage);
