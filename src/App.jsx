import React from "react";
import "./App.scss";
import { getPosts, getUsers, getComments } from "./api/api";
import PostList from "./components/PostList";
import SearchField from "./components/SearchField";
import Button from "./components/Button";

class App extends React.Component {
  state = {
    posts: [],
    isLoaded: false,
    buttonStatus: false,
    searchFieldValue: "",
    errorText: ""
  };

  loadPosts = () => {
    this.setState({
      buttonStatus: true,
      errorText: ""
    });

    // Bad internet connection simulation
    setTimeout(async () => {
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
          isLoaded: false,
          buttonStatus: false,
          errorText: err.message
        });
      }
    }, 1333);
  };

  groupAllData = (posts, users, comments) => {
    return posts.map(post => ({
      ...post,
      user: users.find(user => post.userId === user.id),
      comments: comments.filter(comment => comment.postId === post.id)
    }));
  };

  postToRender = event => {
    const searchFieldValue = this.state.searchFieldValue.trim().toLowerCase();

    if (!searchFieldValue.trim()) {
      return;
    }

    return this.state.posts.filter(
      post =>
        post.title.trim().includes(searchFieldValue) ||
        post.body.trim().includes(searchFieldValue)
    );
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
      errorText,
      buttonStatus,
      searchFieldValue
    } = this.state;

    let postsToRender = this.postToRender() || posts;

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
            <>
              <Button
                errorText={errorText}
                loadPosts={this.loadPosts}
                buttonStatus={buttonStatus}
              />
              <div className="error__message">{errorText}</div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default App;
