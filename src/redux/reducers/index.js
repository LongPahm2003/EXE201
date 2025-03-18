import { combineReducers } from 'redux';
import authReducer from './authReducer';
import courseReducer from './courseReducer';
import courseAdminReducer from './courseAdminReducer';
import paymentReducer from './paymentReducer';
import myCoursesReducer from './myCoursesReducer';
import chaptersReducer from './chaptersReducer';
import lessonsReducer from './lessonsReducer';


const rootReducer = combineReducers({
  auth: authReducer,
  courses: courseReducer,
  adminCourse: courseAdminReducer,
  payment: paymentReducer,
  myCourses: myCoursesReducer,
  chapters: chaptersReducer,
  lessons: lessonsReducer,
});

export default rootReducer; 