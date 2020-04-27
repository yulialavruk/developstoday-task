import { PostsType } from "../interfaces/index";

export type StateType = {
  isFetching: boolean;
  posts: Array<PostsType>;
  post_details: PostsType | {};
};

const initialState: StateType = {
  isFetching: false,
  posts: [],
  post_details: {},
};

export const reducer = (state = initialState, action: any): StateType => {
  switch (action.type) {
    case "POSTS_LIST":
      return { ...state, posts: action.payload };

    case "POST_DETAILS":
      return {
        ...state,
        post_details: action.payload,
      };
    case "POST_FETCHING":
      return {
        ...state,
        isFetching: action.payload,
      };

    default:
      return state;
  }
};
