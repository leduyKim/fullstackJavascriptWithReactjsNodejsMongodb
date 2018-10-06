import {createStore, combineReducers} from 'redux';
import NumberReducer from './reducers/numberReducer';
import EditStatusReducer from './reducers/editStatusReducer';

const allReducer = combineReducers({ numbers: NumberReducer, editStatus: EditStatusReducer });

const store = createStore(allReducer);
store.subscribe(() =>
    console.log(store.getState())
)

export default store;