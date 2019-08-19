import React from 'react';
import Post from './Post';

const PostList = ({ posts }) => {
  return (
    <div className="postList">
      {posts.map(post => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;
