interface IArticleBase {
  id: string;
  title: string;
  text: string;
  comments: Array<IComment>
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
}

export interface IArticleTransformed extends IArticleBase {
  author: string;
}

export interface IComment extends ICommentBase {
  commenter: IAuthor;
}

export interface ICommentTransformed extends ICommentBase {
  commenter: string;
}

