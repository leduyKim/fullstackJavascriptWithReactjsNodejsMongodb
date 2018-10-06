import { createStore } from 'redux'
import addDataReducer from '../reducers/addDataReducer';


const store = createStore(addDataReducer);

export default store;