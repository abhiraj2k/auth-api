const passwordReducer = (state = null, action) => {
  switch (action.type) {
    case "PASSWORD_UPDATE":
      return action.payload;
    default:
      return state;
  }
};

export default passwordReducer;
