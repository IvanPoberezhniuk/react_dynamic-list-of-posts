import React from "react";
import "./App.css";
import { getPosts, getUsers, getComments } from "./api/api";
import PostList from "./components/PostList";

class App extends React.Component {
  state = {
    data: []
  };

  loadData = async () => {
    const [POSTS, USERS, COMMENTS] = await Promise.all([
      getPosts(),
      getUsers(),
      getComments()
    ]);
    const DATA = this.groupeAllData(POSTS, USERS, COMMENTS);

    this.setState({
      data: DATA
    });
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
        {!data.length ? (
          <button type="button" onClick={this.loadData}>
            Press ME!
          </button>
        ) : (
          <PostList data={data} />
        )}
      </div>
    );
  }
}

export default App;
