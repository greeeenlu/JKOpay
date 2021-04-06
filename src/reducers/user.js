export const user = (state = {}, action) => {
  switch (action.type) {
    case "CURRENT_USER":
      return {
        userType: action.user
      };
    default:
      return state;
  }
};
