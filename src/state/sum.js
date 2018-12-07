const ADD = 'sum'

const INITIAL_STATE = {
    first: 0,
    second: 0
}

export default (state = INITIAL_STATE, action) => {

    switch(action.type) {

        case ADD:
            return {
                ...state
            }

        default:
            return state
    }
}