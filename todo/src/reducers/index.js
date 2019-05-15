import { ADD_TODO, TOGGLE_TODO } from '../actions';

const initialState = {
    todos: [    ]
}

function reducer(state = initialState, action) {
    switch(action.type){
        case ADD_TODO:
            const newTodo = {
                value: action.payload,
                completed: false,
                id: Date.now()
            }
            return {
                ...state,
                todos: [...state.todos, newTodo]
            }
        case TOGGLE_TODO: 
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        return { ...todo, completed: !todo.completed}
                    }
                    return todo;
                })
            }
        default:
        return state;
    }
}
export default reducer;