const emailReducer = (state = null, action) => {
  switch (action.type) {
    case "EMAIL_UPDATE":
      return action.payload;
    default:
      return state;
  }
};
export default emailReducer;
