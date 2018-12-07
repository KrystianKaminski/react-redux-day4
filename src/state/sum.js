const FIRST_INPUT = 'FIRST_INPUT'
const SECOND_INPUT = 'SECOND_INPUT'

const INITIAL_STATE = {
    first: 0,
    second: 0
}

export const checkFirstInputValue = value => ({
    type: FIRST_INPUT,
    value: parseInt(value)
})

export const checkSecondInputValue = value => ({
    type: SECOND_INPUT || 0,
    value: parseInt(value) || 0
})

export default (state = INITIAL_STATE, action) => {

    switch(action.type) {

        case FIRST_INPUT:
            return {
                ...state,
                first: action.value
            }

        case SECOND_INPUT:
            return {
                ...state,
                second: action.value
            }

        default:
            return state
    }
}