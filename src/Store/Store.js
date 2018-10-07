import { createStore, combineReducers } from 'redux'
import addDataReducer from '../reducers/addDataReducer';
import hasForm from '../reducers/hasForm';

const allReducer = combineReducers({addDataReducer, hasForm});

const store = createStore(allReducer);

export default store;