import { firebaseData } from './../model/firebase'

const stateForm = {
    isEdit: false,
    dataElement: {},
    isAdd: false
}

const hasForm = (state = stateForm, action) => {
    switch (action.type) {
        case 'CHANGE_EDIT_STATUS':
            return {...state, isEdit: !state.isEdit}
        case 'CHANGE_ADD_STATUS':
            return {...state, isAdd: !state.isAdd}
        case 'GET_DATA':
            return {...state, dataElement: action.item}
        case 'EDIT':
            firebaseData.child(action.item.id).update({
                title: action.item.title,
                content: action.item.content
            })
            return {...state, dataElement: action.item}
        case 'DELETE':
            firebaseData.child(action.id).remove();
            return state;
        default:
            return state
    }
}

export default hasForm;