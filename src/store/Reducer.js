let reduseState = {
    todo: "",
    todos: [{ text: "",isComplite: false }]
    
}

export default function Reducer(state = reduseState, action) {
    switch(action.type){
        case "INP_NEW_TO_DO":
            return {
                ...state,
                todo: action.payload
            }
        case "ADD_NEW_TO_DO": 
            return {
                ...state,
                todos: [...state.todos , {
                    text : state.todo,
                    isComplite: false
                }] 
            }
        default:
            return state
    }

}