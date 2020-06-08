/**
 * signin
 */
export const signin = (state, payload) => {
  const newState = {user: payload}; // TODO: should be changed
  return newState;
};

/**
 * signout
 */
export const signout = (state, payload) => {
  const newState = {user: {}};
  return newState; // TODO: should be changed
};
