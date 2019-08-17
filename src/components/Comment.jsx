import React from 'react';

const Comments = ({ comment, postId, removeComment }) => {
  return (
    <section className="comment">
      <span className="comment__name">
        <a href="#/">{comment.name}</a>
      </span>
      <span className="comment__email">
        <a href="#/">{comment.email}</a>
      </span>
      <span
        className="comment__remove"
        onClick={() => {
          removeComment(postId, comment.id);
        }}
      >
        &#10006;
      </span>
      <span className="comment__text">{comment.body}</span>
    </section>
  );
};

export default Comments;
