import { POSTS } from '../actions/types';

const initialState = {
  posts: [],
  isLoaded: false,
  isLoading: false,
  error: null
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS.FETCH_POSTS:
      return { ...state, posts: action.posts };
    case POSTS.IS_LOADED:
      return { ...state, isLoaded: !state.isLoaded };
    case POSTS.IS_LOADING:
      return { ...state, isLoading: !state.isLoading };
    case POSTS.ERROR:
      return { ...state, error: action.error };
    case POSTS.REMOVE_POST:
      const posts = state.posts.filter(post => post.id !== action.id);
      return { ...state, posts };
    case POSTS.REMOVE_COMMENT:
      const postId = state.posts.findIndex(post => post.id === action.postId);
      const newState = { ...state };
      newState.posts[postId].comments = newState.posts[postId].comments.filter(
        comment => comment.id !== action.commentId
      );

      return newState;
    default:
      return state;
  }
};

export default postsReducer;
