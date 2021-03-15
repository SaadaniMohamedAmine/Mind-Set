import {ALL_TODOS,TODO_DONE,TODO_NOT_DONE,DELETE_TODO,ADD_TODO,EDIT_TODO,SAVE_TODO} from './types'

export const allTodos=()=>{
    return {
        type:ALL_TODOS
    }
} ;
export const todosDone=()=>{
    return {
        type :TODO_DONE
    }
} ;
export const todosNotDone=()=>{
    return {
        type:TODO_NOT_DONE
    }
} ;
export const deleteTodo=(id)=>{
  return  {
      type:DELETE_TODO,
      payload:id 
  }
} ;
export const addTodo=(todo)=>{
    return {
        type:ADD_TODO ,
        payload:todo 
    }
}
export const editTodo=(todo)=>{
    return  {
        type:EDIT_TODO,
        payload:todo
    }
}

export const saveTodo=(todo)=>{
    return  {
        type:SAVE_TODO ,
        payload:todo 
    }
}