export const TOGGLE_TODO = "TOGGLE_TODO";

export const ADD_TODO = "ADD_TODO";

export function addTodo(newTodo) {
    return {
        type: ADD_TODO,
        payload: newTodo
    }
}

export function toggleTodo(id){
    return {
        type: TOGGLE_TODO,
        payload: id
    }
}