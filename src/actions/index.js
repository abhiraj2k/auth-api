export const setEmailToState = (email) => {
  return {
    type: "EMAIL_UPDATE",
    payload: email,
  };
};
export const setPasswordToState = (password) => {
  return {
    type: "PASSWORD_UPDATE",
    payload: password,
  };
};
