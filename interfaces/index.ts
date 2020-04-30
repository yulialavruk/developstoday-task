export interface PostType {
  id: number;
  title: string;
  body: string;
  comments: Array<CommentsType>;
}

type CommentsType = {
  id: number;
  postId: number;
  body: string;
};
