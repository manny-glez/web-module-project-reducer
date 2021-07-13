export const ADD_ONE = "ADD_ONE";
export const ADD_TWO = "ADD_TWO"

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const RESET_DISPLAY = "RESET_DISPLAY";
export const ADD_MEMORY = "ADD_MEMORY";
export const MEMORY_APPLY = "MEMORY_APPLY";
export const CLEAR_MEMORY = "CLEAR_MEMORY";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const addTwo = () => {
    return({type:ADD_TWO});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operator) => {
    return({type: CHANGE_OPERATION, payload:operator})
}

export const resetDisplay = () => {
    return({type: RESET_DISPLAY})
}

export const addMemory = () => {
    return({type: ADD_MEMORY})
}

export const applyMemory = () => {
    return({type: MEMORY_APPLY})
}

export const clearMemory = () => {
    return({type: CLEAR_MEMORY})
}