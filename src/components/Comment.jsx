import React from "react";

const Comments = props => {
  const { comment } = props;
  return (
    <>
      <span className="comment__name"><a href="#/">{comment.name}</a></span>
      <span className="comment__body">{comment.body}</span>
      <span className="comment__email"><a href="#/">{comment.email}</a></span>
    </>
  );
};

export default Comments;
