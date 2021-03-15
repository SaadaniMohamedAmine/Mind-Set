import {ALL_TODOS,TODO_DONE,TODO_NOT_DONE,DELETE_TODO,ADD_TODO,EDIT_TODO,SAVE_TODO} from '../actions/types'
import { v4 as uuidv4 } from "uuid";

let todosList={
    todos: [
        {
            id:uuidv4(),
            title:"Design course",
            description:"Achieve the training of the design path",
            status:"notDone"
        },
        {
            id:uuidv4(),
            title:"Back-end course",
            description:"Complete the main chapters of the back-end courses",
            status:"notDone"
        },
        {
            id:uuidv4(),
            title:"Front-end course",
            description:"Complete the courses of the main chapters of the front-end path",
            status:"Done"
        },
        {
            id:uuidv4(),
            title:"Figma course",
            description:"complete the Figma course on the platform of Barmij",
            status:"Done"
        },
        {
            id:uuidv4(),
            title:"Material UI",
            description:"Initiate in Material UI,and try some new things ",
            status:"notDone"
        },
        {
            id:uuidv4(),
            title:"UX Design course",
            description:"Achieve the training of the Ux Design google course",
            status:"notDone"
        }
    ],filt:null ,
    save:null
} ;

const todosReducer=(state=todosList,action)=>{
   switch(action.type) {
       case ALL_TODOS :
           return {...state,filt:null} ;
       case TODO_DONE:
           return {...state,filt:"Done"} ;
       case TODO_NOT_DONE:
           return {...state,filt:"notDone"} ;
       case DELETE_TODO:
           return {...state,todos:state.todos.filter(item=>item.id!==action.payload)}   ;
        case ADD_TODO :
            return  {...state,todos:[...state.todos,action.payload]}  ;
        case SAVE_TODO:
            return {
                ...state,
                save:action.payload 
            } ;
            case EDIT_TODO :
                return {
                    ...state,
                    save:null ,
                    todos:state.todos.map(item=>(item.id===action.payload.id?action.payload:item))
                }
       default :
       return state ;
   }
}
export default todosReducer ;