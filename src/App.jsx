import React from "react";
import "./App.css";
import { getPosts, getUsers, getComments } from "./api/api";
import PostList from "./components/PostList";

class App extends React.Component {
  state = {
    posts: [],
    isLoaded: false,
    buttonInnerText: "Press Me!",
    buttonStyle: ""
  };

  loadPosts = async event => {
    event.target.blur();

    this.setState({
      buttonInnerText: "Loading..."
    });

    try {
      let [posts, users, cooments] = await Promise.all([
        getPosts(),
        getUsers(),
        getComments()
      ]);

      let response = this.groupeAllData(posts, users, cooments);

      this.setState({
        posts: response,
        isLoaded: true
      });
    } catch (err) {
      this.setState({
        buttonStyle: "error",
        buttonInnerText: `${err.message}`
      });
    }
  };

  groupeAllData = (posts, users, comments) => {
    return posts.map(post => ({
      ...post,
      user: users.find(user => post.userId === user.id),
      comments: comments.filter(comment => comment.postId === post.id)
    }));
  };

  render() {
    const { posts, isLoaded, buttonStyle } = this.state;

    return (
      <div className="App">
        <div className="myFancyBlock">
          {isLoaded ? (
            <PostList posts={posts} />
          ) : (
            <button
              type="button"
              onClick={event => this.loadPosts(event)}
              className={`loadPostsButton ` + buttonStyle}
            >
              {this.state.buttonInnerText}
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default App;
