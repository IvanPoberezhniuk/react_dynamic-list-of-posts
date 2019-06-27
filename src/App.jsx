import React from "react";
import "./App.css";
import { getPosts, getUsers, getComments } from "./api/api";
import PostList from "./components/PostList";

class App extends React.Component {
  state = {
    data: []
  };

  loadData = event => {
    event.target.innerText = "Loading...";
    // Server response emulation
    setTimeout(async () => {
      const [POSTS, USERS, COMMENTS] = await Promise.all([
        getPosts(),
        getUsers(),
        getComments()
      ]);
      const DATA = this.groupeAllData(POSTS, USERS, COMMENTS);

      this.setState({
        data: DATA
      });
    }, 350);
  };

  groupeAllData = (POSTS, USERS, COMMENTS) => {
    return POSTS.map(post => ({
      ...post,
      user: USERS.find(user => post.userId === user.id),
      comments: COMMENTS.filter(comment => comment.postId === post.id)
    }));
  };

  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <div className="App">
        <div className="myFancyBlock">
          {!data.length ? (
            <button
              type="button"
              onClick={event => this.loadData(event)}
              className="loadDataButton"
            >
              Press ME!
            </button>
          ) : (
            <PostList data={data} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
