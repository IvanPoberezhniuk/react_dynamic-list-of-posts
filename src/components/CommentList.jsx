import React from "react";
import Comment from "./Comment";

const CommentList = props => {
  const { comments } = props;

  return (
    <section className="post__comments">
      {comments.map(comment => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </section>
  );
};

export default CommentList;
