export const getPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then(res =>
    res.json()
  );
};

export const getUsers = () => {
  return fetch("https://jsonplaceholder.typicode.com/users").then(res =>
    res.json()
  );
};

export const getComments = () => {
  return fetch("https://jsonplaceholder.typicode.com/comments").then(res =>
    res.json()
  );
};
