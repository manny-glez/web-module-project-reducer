import { ADD_ONE, ADD_TWO, APPLY_NUMBER, CHANGE_OPERATION, RESET_DISPLAY, ADD_MEMORY, MEMORY_APPLY, CLEAR_MEMORY } from './../actions';

export const initialState = {
    total: 0,
    operation: "+",
    memory: 0
}

const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_ONE):
            return({
                ...state,
                total: state.total + 1
            });
        case(ADD_TWO):
            return({
                ...state,
                total: state.total + 2
            })

        case(APPLY_NUMBER):
            return ({ 
                ...state,
                total: calculateResult(state.total, action.payload, state.operation)
            });
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });

        case(RESET_DISPLAY):
            return ({
                ...state,
                total: 0
            })

        case(ADD_MEMORY):
            return ({
                ...state,
                memory: state.total
            })

        case(MEMORY_APPLY):    
            return ({
                ...state,
                total: calculateResult(state.total, state.memory, state.operation)
            })

        case(CLEAR_MEMORY):
            return ({
                ...state,
                memory: 0
            })

        default:
            return state;
    }
}

export default reducer;