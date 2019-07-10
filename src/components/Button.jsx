import React from 'react';

const Button = ({ loadPosts, buttonStatus, errorText }) => {
  const innerText = () => {
    if (!buttonStatus && !errorText) {
      return 'Press Me';
    } else if (errorText) {
      return 'Try Again';
    } else {
      return 'Loading...';
    }
  };

  return (
    <button
      type="button"
      onClick={loadPosts}
      className={`loadPostsButton ${errorText ? 'error' : ''}`}
      disabled={buttonStatus}
    >
      {innerText()}
    </button>
  );
};

export default Button;
