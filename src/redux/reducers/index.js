import { combineReducers } from 'redux';
import authReducer from './authReducer';
import courseReducer from './courseReducer';
import courseAdminReducer from './courseAdminReducer';
import paymentReducer from './paymentReducer';


const rootReducer = combineReducers({
  auth: authReducer,
  courses: courseReducer,
  adminCourse: courseAdminReducer,
  payment: paymentReducer,
});

export default rootReducer; 