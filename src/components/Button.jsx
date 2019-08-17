import React from 'react';

const Button = ({ fetchPosts, isLoading, error }) => {
  const innerText = () => {
    if (!isLoading && !error) {
      return 'Press Me';
    } else if (error) {
      return 'Try Again';
    } else {
      return 'Loading...';
    }
  };

  return (
    <button
      type="button"
      onClick={fetchPosts}
      className={error ? 'loadPostsButton error' : 'loadPostsButton'}
      disabled={isLoading}
    >
      {innerText()}
    </button>
  );
};

export default Button;
