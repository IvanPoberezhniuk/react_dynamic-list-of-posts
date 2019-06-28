import React from "react";

const Comments = ({ comment }) => {
  return (
    <section key={comment.id} className="post__comment">
      <span className="comment__name">
        <a href="#/">{comment.name}</a>
      </span>
      <span className="comment__body">{comment.body}</span>
      <span className="comment__email">
        <a href="#/">{comment.email}</a>
      </span>
    </section>
  );
};

export default Comments;
