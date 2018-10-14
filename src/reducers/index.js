import { combineReducers } from 'redux';
import CommentsReducer from '../reducers/CommentsReducer'

export default combineReducers({
 comments : CommentsReducer
});
