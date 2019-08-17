import { groupAllData } from '../api/helpers';
import { POSTS } from './types';
import { getPosts, getUsers, getComments } from '../api/api';

export const fetchPosts = () => dispatch => {
  dispatch({
    type: POSTS.IS_LOADING
  });
  Promise.all([getPosts(), getUsers(), getComments()])
    .then(response => {
      const [posts, users, comments] = response;
      return groupAllData(posts, users, comments);
    })
    .then(posts => {
      dispatch({
        type: POSTS.FETCH_POSTS,
        posts
      });
      dispatch({
        type: POSTS.IS_LOADED
      });
    })
    .catch(error =>
      dispatch({
        type: POSTS.ERROR,
        error
      })
    )
    .finally(
      dispatch({
        type: POSTS.IS_LOADING
      })
    );
};

export const removePost = id => ({
  type: POSTS.REMOVE_POST,
  id
});

export const removeComment = (postId, commentId) => {
  return {
    type: POSTS.REMOVE_COMMENT,
    postId,
    commentId
  };
};
