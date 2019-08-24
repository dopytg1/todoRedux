export const inputNewToDo = val => {
    return {
        type: "INP_NEW_TO_DO",
        payload: val
    }
}

export const addNewToDo = () => {
    return {
        type: "ADD_NEW_TO_DO"
    }
}