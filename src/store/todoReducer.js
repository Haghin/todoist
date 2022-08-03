const defaultState = {
    todo: []
}

const GET_TODOS = 'GET_TODOS';
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const EDIT_TODO = 'EDIT_TODO';

export const todoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_TODOS:
            return state
        case ADD_TODO:
            return { ...state, todo: [...state.todo, action.payload] }
        case REMOVE_TODO:
            return { ...state, todo: state.todo.filter(item => item.id !== action.payload) }
        case EDIT_TODO:
            return { ...state, todo: state.todo.filter(item => item.id === action.payload.dataId ? item.description = action.payload.dataDescription : item.description) }
        default:
            return state
    }
}

export const getTodosAction = () => ({ type: GET_TODOS })
export const addTodoAction = (payload) => ({ type: ADD_TODO, payload })
export const removeTodoAction = (payload) => ({ type: REMOVE_TODO, payload })
export const editTodoAction = (payload) => ({ type: EDIT_TODO, payload })