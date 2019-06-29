import React, { Component } from "react";
import Post from "./Post";


class PostList extends Component {
  render() {
    const { posts } = this.props;

    return (
      <div className="postList">
        {posts.map(post => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    );
  }
}

export default PostList;