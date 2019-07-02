import React from "react";

const Button = ({ loadPosts, buttonStatus, errorText }) => {
  let buttonInnerText;
  let buttonStyle;

  switch (buttonStatus) {
    case buttonStatus || errorText:
      buttonInnerText = "Loading...";
      buttonStyle = "";
      break;
    case !errorText:
      buttonInnerText = "Try Again";
      buttonStyle = "error";
      break;
    default:
      buttonInnerText = "Press Me";
      break;
  }

  return (
    <>
      <button
        type="button"
        onClick={loadPosts}
        className={`loadPostsButton ${buttonStyle}`}
        disabled={buttonStatus}
      >
        {buttonInnerText}
      </button>
    </>
  );
};

export default Button;
