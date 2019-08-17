export const groupAllData = (posts, users, comments) => {
  return posts.map(post => ({
    ...post,
    user: users.find(user => post.userId === user.id),
    comments: comments.filter(comment => comment.postId === post.id)
  }));
};
