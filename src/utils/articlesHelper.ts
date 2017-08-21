const cloneDeep = require('clone-deep');
import {IArticle, IArticleTransformed, IAuthor, ICommentTransformed} from '../interfaces/article';

export function getAuthors(articles: Array<IArticle>): Array<IAuthor> {
  const authors: Array<IAuthor> = [];
  const authorsId: Array<string> = [];

  for (const article of articles) {
    if (!authorsId.includes(article.author.id)) {
      authors.push(article.author);
      authorsId.push(article.author.id);
    }
    for (const comment of article.comments) {
      if (!authorsId.includes(comment.commenter.id)) {
        authors.push(comment.commenter);
        authorsId.push(comment.commenter.id);
      }
    }
  }

  return authors;
}

export function normalizeArticles(articles: Array<IArticle>): Array<IArticleTransformed> {
  const newArticles: Array<any> = cloneDeep(articles);

  for (const article of newArticles) {
    article.author = article.author.id;
    for (const comment of article.comments) {
      comment.commenter = comment.commenter.id;
    }
  }

  return newArticles;
}

export function getComments(articles: Array<IArticle>): Array<ICommentTransformed> {
  const comments: Array<ICommentTransformed> = [];
  const newArticles = normalizeArticles(articles);

  for (const article of newArticles) {
    comments.push(...article.comments);
  }
  return comments;
}
