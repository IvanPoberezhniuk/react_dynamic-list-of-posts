import React, { Component } from "react";
import Post from "./Post";

class PostList extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className="postList">
        {data.map(post => (
          <section key={post.id} className="post">
            <Post post={post} />
          </section>
        ))}
      </div>
    );
  }
}

export default PostList;
