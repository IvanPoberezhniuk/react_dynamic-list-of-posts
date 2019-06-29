import React from "react";
import "./App.scss";
import { getPosts, getUsers, getComments } from "./api/api";
import PostList from "./components/PostList";
import SearchField from "./components/SearchField";

class App extends React.Component {
  state = {
    posts: [],
    isLoaded: false,
    buttonStatus: false,
    buttonInnerText: "Press Me!",
    buttonStyle: "",
    searchFieldValue: ""
  };

  loadPosts = async event => {
    this.setState({
      buttonInnerText: "Loading...",
      buttonStatus: true
    });

    try {
      const [posts, users, cooments] = await Promise.all([
        getPosts(),
        getUsers(),
        getComments()
      ]);

      this.setState({
        posts: this.groupAllData(posts, users, cooments),
        isLoaded: true
      });
    } catch (err) {
      this.setState({
        buttonStyle: "error",
        buttonInnerText: `${err.message}`
      });
    }
  };

  groupAllData = (posts, users, comments) => {
    return posts.map(post => ({
      ...post,
      user: users.find(user => post.userId === user.id),
      comments: comments.filter(comment => comment.postId === post.id)
    }));
  };

  postToRneder = event => {
    const searchFieldValue = this.state.searchFieldValue.toLowerCase();

    if (/^ *$/.test(searchFieldValue)) {
      return;
    } else {
      return this.state.posts.filter(
        post =>
          post.title
            .replace(/(\r\n|\n|\r)/gm, " ")
            .includes(searchFieldValue) ||
          post.body
            .replace(/(\r\n|\n|\r)/gm, " ")
            .includes(searchFieldValue)
      );
    }
  };

  updateSerachFieldValue = event => {
    this.setState({
      searchFieldValue: event.target.value
    });
  };

  render() {
    const {
      posts,
      isLoaded,
      buttonStyle,
      buttonStatus,
      searchFieldValue
    } = this.state;

    let postsToRender = this.postToRneder() || posts;

    return (
      <div className="App">
        <div className="myFancyBlock">
          {isLoaded ? (
            <>
              <SearchField
                searchFieldValue={searchFieldValue}
                updateSerachFieldValue={this.updateSerachFieldValue}
              />
              <PostList posts={postsToRender} />
            </>
          ) : (
            <button
              type="button"
              onClick={this.loadPosts}
              className={`loadPostsButton ` + buttonStyle}
              disabled={buttonStatus}
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
