import { IArticle, IArticleTransformed, ICommentTransformed, IAuthorsObj } from '../interfaces/article';

const cloneDeep = require('clone-deep');

export function getAuthors(articles: Array<IArticle>): IAuthorsObj {
  const authorsId: Array<string> = [];
  const authorsObj: IAuthorsObj = {};

  for (const article of articles) {
    if (!authorsId.includes(article.author.id)) {
      authorsObj[article.author.id] = article.author;
      authorsId.push(article.author.id);
    }
    for (const comment of article.comments) {
      if (!authorsId.includes(comment.commenter.id)) {
        authorsObj[comment.commenter.id] = comment.commenter;
        authorsId.push(comment.commenter.id);
      }
    }
  }

  return authorsObj;
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
