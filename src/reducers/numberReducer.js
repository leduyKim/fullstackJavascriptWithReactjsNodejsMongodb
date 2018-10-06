const numbers = [1, 2, 3, 4];

const NumberReducer = (state = numbers, action) => {
    switch (action.type) {
        case 'ADD_NEW':
            return [...numbers, action.numbers] 
        case 'DELETE':
            return numbers.filter((value, index) => index !== action.index)
        default:
            return state
    }
}

export default NumberReducer;
