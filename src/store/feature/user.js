/**
 * signin
 */
export const signin = (state, payload) => {
  return {...state, user: payload};
};

/**
 * signout
 */
export const signout = (state, payload) => {
  const unauthenticatedUser = {...state.user, auth: false};
  return {...state, user: unauthenticatedUser};
};
