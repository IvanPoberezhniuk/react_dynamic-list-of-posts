import React from "react";
import Comment from "./Comment";

const CommentList = props => {
  const { comments } = props;

  return comments.map(comment => (
    <section key={comment.id} className="post__comment">
      <Comment comment={comment} />
    </section>
  ));
};

export default CommentList;
