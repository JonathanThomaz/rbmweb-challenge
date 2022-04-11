import { combineReducers } from 'redux';
import auth from './auth/auth.reducers';

export default combineReducers({
  auth: auth,
});
