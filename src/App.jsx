import React, { useState, useMemo } from 'react';
import { debounce } from 'lodash';
import './App.scss';
import { connect } from 'react-redux';
import { fetchPosts } from './actions/postsActions';

import PostList from './components/PostList';
import SearchField from './components/SearchField';
import Button from './components/Button';

const App = ({ posts, isLoaded, isLoading, error, fetchPosts }) => {
  const [searchFieldValue, setSearchFieldValue] = useState('');

  const filterPosts = (posts, searchFieldValue) => {
    console.log('filtePOstst');
    if (!searchFieldValue) {
      return posts;
    } else {
      return posts.filter(post =>
        (post.title + post.body)
          .replace(/(\s)/gm, '')
          .toLowerCase()
          .includes(searchFieldValue)
      );
    }
  };

  const changeSearchFieldValue = debounce(event => {
    const value = event.target.value.toLowerCase().replace(/(\s)/gm, '');

    if (!value) {
      return setSearchFieldValue('');
    } else {
      console.log('changed SearchFieldValue');
      setSearchFieldValue(value);
    }
  }, 333);

  const debouncedChangeSearchFieldValue = event => {
    event.persist();
    changeSearchFieldValue(event);
  };

  let postsToRender = useMemo(() => filterPosts(posts, searchFieldValue), [
    posts,
    searchFieldValue
  ]);

  return (
    <div className="App">
      {console.log(posts)}
      <div className="myFancyBlock">
        {isLoaded ? (
          <>
            <SearchField
              searchFieldValue={searchFieldValue}
              debouncedChangeSearchFieldValue={debouncedChangeSearchFieldValue}
            />
            <PostList posts={postsToRender} />
          </>
        ) : (
          <>
            <Button
              error={error}
              fetchPosts={fetchPosts}
              isLoading={isLoading}
            />
            <div className="error__message">{error}</div>
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  posts: state.postsReducer.posts,
  isLoaded: state.postsReducer.isLoaded,
  isLoading: state.postsReducer.isLoading,
  error: state.postsReducer.isLoading
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
