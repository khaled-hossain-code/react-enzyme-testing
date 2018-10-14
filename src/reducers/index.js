import { combineReducers } from 'redux';
import CommentsRedcer from '../reducers/CommentsRedcer'

export default combineReducers({
 comments : CommentsRedcer
});
