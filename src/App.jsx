import React, { Component } from 'react';
import { debounce } from 'lodash';
import './App.scss';
import { getPosts, getUsers, getComments } from './api/api';
import PostList from './components/PostList';
import SearchField from './components/SearchField';
import Button from './components/Button';

class App extends Component {
  state = {
    posts: [],
    postsToRender: [],
    isLoaded: false,
    buttonStatus: false,
    searchFieldValue: '',
    errorText: ''
  };

  loadPosts = async () => {
    this.setState({
      buttonStatus: true,
      errorText: ''
    });

    try {
      const [posts, users, cooments] = await Promise.all([
        getPosts(),
        getUsers(),
        getComments()
      ]);

      const groupedData = this.groupAllData(posts, users, cooments);

      this.setState({
        posts: groupedData,
        postsToRender: groupedData,
        isLoaded: true
      });
    } catch (err) {
      this.setState({
        isLoaded: false,
        buttonStatus: false,
        errorText: err.message
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

  filterPosts = debounce(event => {
    const searchFieldValue = event.target.value
      .toLowerCase()
      .replace(/(\s)/gm, '');

    if (!searchFieldValue) {
      this.setState(prevState => ({
        postsToRender: prevState.posts
      }));
    } else {
      this.setState(prevState => {
        const postsToRender = prevState.posts.filter(post =>
          (post.title + post.body)
            .replace(/(\s)/gm, '')
            .toLowerCase()
            .includes(searchFieldValue)
        );

        return {
          searchFieldValue: searchFieldValue,
          postsToRender: postsToRender || prevState.posts
        };
      });
    }
  }, 333);

  debouncedFilterPosts = event => {
    event.persist();
    this.filterPosts(event);
  };

  render() {
    const {
      isLoaded,
      errorText,
      buttonStatus,
      searchFieldValue,
      postsToRender
    } = this.state;

    return (
      <div className="App">
        <div className="myFancyBlock">
          {isLoaded ? (
            <>
              <SearchField
                searchFieldValue={searchFieldValue}
                filterPosts={this.debouncedFilterPosts}
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
