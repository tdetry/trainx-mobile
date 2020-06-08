import {signin, signout} from './feature/user';

import {SIGNIN, SIGNOUT} from './constants';

const initialState = {
  user: {},
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SIGNIN:
      return signin(state, action.payload);

    case SIGNOUT:
      return signout(state, action.payload);

    default:
      return state;
  }
}

export default reducer;
