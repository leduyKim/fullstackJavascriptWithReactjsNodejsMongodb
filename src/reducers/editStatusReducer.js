const editStatus = false;

const EditStatusReducer = (state = editStatus, action) => {
  switch (action.type) {
    case 'CHANGE_STATUS':
      return !state;
    default:
      return state
  }
}

export default EditStatusReducer;
