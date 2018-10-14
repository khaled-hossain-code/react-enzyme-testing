import CommentsReducer from "../CommentsReducer";
import { SAVE_COMMENT } from '../../actions/types';

it('should handle save comment action', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'New Comment'
  }

  const new_state = CommentsReducer([],action);
  expect(new_state).toEqual(['New Comment']);
})