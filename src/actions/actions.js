import { ADD_INPUT } from './types'
import {Remove_toDo} from './types'
import {Undo_todo} from './types'
import {Edit_todo} from './types'

export const addTodo = (newTodo) => {
    return {
        type: ADD_INPUT,
        payload: newTodo
    }
}
export const Removetodo=(id)=>{
    return {
        type: Remove_toDo,
        payload : id,
    }
}
export const UndoTodo=(id)=>{
    return {
        type: Undo_todo,
        payload: id,
    }
}
export const EditTodo=(id)=>{
    return {
        type: Edit_todo,
        payload: id,
    }
}