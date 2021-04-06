export const signup = (user) => ({
  type: "SIGNUP",
  user
});

export const currentUser = (user) => ({
  type: "CURRENT_USER",
  user
});
