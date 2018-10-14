import { saveComment } from "../index";
import { SAVE_COMMENT } from '../types';

describe('.saveComment', () => {
  it('has correct payload and type', ()  => {
    const action = saveComment('new comment');

    expect(action).toEqual({type: SAVE_COMMENT, payload: 'new comment'})
  })
})