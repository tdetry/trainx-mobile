/*
 * action types
 */

import {SIGNIN, SIGNOUT} from './constants';

/*
 * action creators
 */

export function signin(payload) {
  return {type: SIGNIN, payload};
}

export function signout(payload) {
  return {type: SIGNOUT, payload};
}
