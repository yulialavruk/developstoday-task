import axios from "axios";
import { PostType } from "../interfaces/index";

const POSTS_LIST = "POSTS_LIST";
const POST_DETAILS = "POST_DETAILS";
const POST_FETCHING = "POST_FETCHING";

type PostsListType = {
  type: typeof POSTS_LIST;
  payload: Array<PostType>;
};

const actionCreatorPostsList = (payload: Array<PostType>): PostsListType => {
  return {
    type: POSTS_LIST,
    payload,
  };
};

type PostDetailsType = {
  type: typeof POST_DETAILS;
  payload: object;
};

const actionCreatorPostDetails = (payload: PostType): PostDetailsType => {
  return {
    type: "POST_DETAILS",
    payload,
  };
};

type PostFetchingType = {
  type: typeof POST_FETCHING;
  payload: boolean;
};

const actionCreatorPostFetching = (payload: boolean): PostFetchingType => {
  return {
    type: "POST_FETCHING",
    payload,
  };
};

export const getPosts = () => (dispatch: any) => {
  dispatch(actionCreatorPostFetching(true));
  axios.get("https://simple-blog-api.crew.red/posts").then((response) => {
    if (response.status === 200) {
      dispatch(actionCreatorPostsList(response.data));
      dispatch(actionCreatorPostFetching(false));
    } else {
      dispatch(actionCreatorPostFetching(false));
    }
  });
};

export const getPostDetails = (id: number) => (dispatch: any) => {
  dispatch(actionCreatorPostFetching(true));
  axios
    .get(`https://simple-blog-api.crew.red/posts/${id}`, {
      params: {
        _embed: "comments",
      },
    })
    .then((response) => {
      if (response.status === 200) {
        dispatch(actionCreatorPostDetails(response.data));
        dispatch(actionCreatorPostFetching(false));
      } else {
        dispatch(actionCreatorPostFetching(false));
      }
    });
};

export const createComment = (id: number, comment: string) => (
  dispatch: any
) => {
  axios
    .post(`https://simple-blog-api.crew.red/comments`, {
      postId: id,
      body: comment,
    })
    .then((response) => {
      if (response.status === 201) {
        dispatch(getPostDetails(id));
      }
    });
};

export const createPost = (title: string, body: string) => (dispatch: any) => {
  dispatch(actionCreatorPostFetching(true));
  axios
    .post(`https://simple-blog-api.crew.red/posts`, {
      title: title,
      body: body,
    })
    .then((response) => {
      if (response.status === 200) {
        dispatch(actionCreatorPostFetching(false));
      } else {
        dispatch(actionCreatorPostFetching(false));
      }
    });
};
