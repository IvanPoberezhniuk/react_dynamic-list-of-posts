import React from 'react';
import Comment from './Comment';
import { connect } from 'react-redux';

const CommentsList = ({ comments, postId, removeComment }) => {
  return (
    <section className="post__comments">
      {comments.map(comment => (
        <Comment
          comment={comment}
          removeComment={removeComment}
          postId={postId}
          key={comment.id}
        />
      ))}
    </section>
  );
};

const mapStateToProps = state => ({
  posts: state.postsReducer.posts
});

export default connect(
  mapStateToProps,
  null
)(CommentsList);
