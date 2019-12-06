// const todosReducer=(state='',action)=>{
//     if(action.type==='SET_INPUT'){
//         return action.value 
//     }else{
//         return state}
// }
// export default todosReducer;

import { ADD_INPUT, Remove_toDo, Undo_todo, Edit_todo } from "../actions/types"

// const initialState = [{text : 'todo' , id : 1, complete : false}]

// const todosReducer = (state=initialState,action) =>{
const todosReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_INPUT:
            return [...state, action.payload];
        case Remove_toDo:
            return state.filter(el => el.id !== action.payload)
        case Undo_todo:
            return state.map(todo =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)
        case Edit_todo:
            return state.map(el=>el.id === action.payload.id ? action.payload: el)
        default:
            return state;
    }
}

export default todosReducer