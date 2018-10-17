import { firebaseData } from './../model/firebase'

const initialState = {
    isAddNote: false
};

const addDataReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'ADD_DATA':
    firebaseData.push(action.item)
    return state;
  default:
    return state
  }
}

export default addDataReducer;
