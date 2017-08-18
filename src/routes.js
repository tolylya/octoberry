import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import NotFoundPage from './components/NotFoundPage';
import ArticleListPage from './pages/Arcticle/containers/ArticleListPage.tsx';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ArticleListPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
