// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type PostsType = {
  id: number;
  title: string;
  body: string;
  comments: Array<CommentsType>;
};

export type CommentsType = {
  id: number;
  postId: number;
  body: string;
};
