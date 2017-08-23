interface IArticleBase {
  id: string;
  title: string;
  text: string;
}

interface ICommentBase {
  id: string;
  text: string;
}

export interface IAuthor {
  id: string;
  name: string;
}

export interface IArticle extends IArticleBase {
  author: IAuthor;
  comments: Array<IComment>
}

export interface IArticleTransformed extends IArticleBase {
  author: string;
  comments: Array<ICommentTransformed>
}

export interface IComment extends ICommentBase{
  commenter: IAuthor;
}

export interface ICommentTransformed extends ICommentBase {
  commenter: string;
}

export interface IAuthorsObj {
  [name: string]: IAuthor;
}
