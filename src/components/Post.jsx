import React from 'react';
import CommentList from './CommentList';

const Post = props => {
  const { post } = props;

  return (
    <section className="post">
      <span className="post__title">{post.title}</span>
      <span className="post__author-name">
        <a href="#/">{post.user.name}</a>
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
      <CommentList comments={post.comments} />
    </section>
  );
};

export default Post;
