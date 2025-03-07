import { combineReducers } from 'redux';
import authReducer from './authReducer';
import courseReducer from './courseReducer';
import courseAdminReducer from './courseAdminReducer';


const rootReducer = combineReducers({
  auth: authReducer,
  courses: courseReducer,
  adminCourse: courseAdminReducer,
});

export default rootReducer; 