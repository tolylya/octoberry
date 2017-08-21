import * as React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import NotFoundPage from './components/NotFoundPage';
import ArticleListPage from './pages/Arcticle/containers/ArticleListPage';
import ArticleDetailPage from './pages/Arcticle/containers/ArticleDetailPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ArticleListPage} />
    <Route path="articles/:id" component={ArticleDetailPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
