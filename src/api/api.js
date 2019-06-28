const URL = "https://jsonplaceholder.typicode.com";

export const getPosts = () => {
  return fetch(`${URL}/posts`)
  .then(res => res.json());
};

export const getUsers = () => {
  return fetch(`${URL}/users`)
  .then(res => res.json());
};

export const getComments = () => {
  return fetch(`${URL}/comments`)
  .then(res => res.json());
};
