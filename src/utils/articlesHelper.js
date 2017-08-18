import cloneDeep from 'clone-deep';

export function getAuthors(articles) {
  const authors = [];
  const authorsId = [];

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

export function normalazeArticles(articles) {
  const newArticles = cloneDeep(articles);

  for (const article of newArticles) {
    article.author = article.author.id;
    for (const comment of article.comments) {
      comment.commenter = comment.commenter.id;
    }
  }

  return newArticles;
}
