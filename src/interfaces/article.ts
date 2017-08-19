interface IArticleBase {
  id: string;
  title: string;
  text: string;
  comments: Array<IComment>
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

export interface IComment {
  id: string;
  text: string;
  commenter: IAuthor;
}
