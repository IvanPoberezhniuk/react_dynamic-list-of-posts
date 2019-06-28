import React from "react";
import Comment from "./Comment";

const CommentList = props => {
  const { comments } = props;

  return (
    <section className="post__comments">
      {comments.map(comment => (
        <Comment comment={comment} />
      ))}
    </section>
  );
};

export default CommentList;
