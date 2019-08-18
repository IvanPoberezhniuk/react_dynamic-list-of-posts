import React from 'react';
import Comment from './Comment';

const CommentsList = props => {
  const { comments, postId, removeComment } = props;

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

export default CommentsList;
