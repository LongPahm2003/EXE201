import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../reducers'; // Đảm bảo đường dẫn này đúng
import { thunk } from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
