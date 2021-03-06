import {SAVE_COMMENT, CHANGE_AUTH} from './types';

export function saveComment(comment){
  return {
    type: SAVE_COMMENT,
    payload: comment
  }
}

export function changeAuth(isLoggedIn){
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  }
}