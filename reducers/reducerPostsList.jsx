const initialState = {
  posts: [],
};

export const reducerPostsList = (state = initialState, action) => {
  switch (action.type) {
    case "POSTS_LIST":
      return { ...state, posts: action.payload.posts };

    default:
      return state;
  }
};
