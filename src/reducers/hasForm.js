const stateForm = {
    isEdit: false,
    dataElement: {}
}

const hasForm = (state = stateForm, action) => {
    switch (action.type) {
        case 'CHANGE_EDIT_STATUS':
            return {...state, isEdit: !state.isEdit}
        case 'GET_DATA':
            return {...state, dataElement: action.item}
        default:
            return state
    }
}

export default hasForm;