export const account = (state = {}, action) => {
  switch (action.type) {
    case "SIGNUP":
      return {
        userType: action.user.userType,
        email: action.user.email,
        password: action.user.password
      };
    default:
      return state;
  }
};
