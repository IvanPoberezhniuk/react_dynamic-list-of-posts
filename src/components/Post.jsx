import React from 'react';
import CommentsList from './CommentsList';
import { connect } from 'react-redux';
import { removePost, removeComment } from '../actions/postsActions';

const Post = ({ post, removePost, removeComment }) => {
  return (
    <section className="post">
      <span className="post__title">{post.title}</span>
      <span className="post__author-name">
        <a href="#/">{post.user.name}</a>
      </span>
      <span className="post__remove" onClick={() => removePost(post.id)}>
        Remove
      </span>
      <span className="post__body">{post.body}</span>
      <span className="post__email">
        <a href="#/">{post.user.email}</a>
      </span>
      <span className="post__address">
        <a href="#/">
          {post.user.address.city} {post.user.address.street}{' '}
          {post.user.address.suite}
        </a>
      </span>
      <CommentsList
        comments={post.comments}
        removeComment={removeComment}
        postId={post.id}
      />
    </section>
  );
};

const mapDispatchToProps = dispatch => ({
  removePost: id => dispatch(removePost(id)),
  removeComment: (postId, commentId) =>
    dispatch(removeComment(postId, commentId))
});

export default connect(
  null,
  mapDispatchToProps
)(Post);
