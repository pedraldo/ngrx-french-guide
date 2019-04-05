import { TodoListModule } from '../actions/todo-list.action';
import { TodoListState } from './../../models/todo';
import { todosMock } from './../../mocks/todo-list';

const initialState: TodoListState = {
  data: [],
  loading: false,
  loaded: false,
  selectTodo: undefined
};

export function todosReducer(
  state: TodoListState = initialState,
  action: TodoListModule.Actions
): TodoListState {
  switch (action.type) {
    // case TodoListModule.ActionTypes.INIT_TODOS:
    //     return {
    //         ...state,
    //         data: [
    //             ...action.payload
    //         ]
    //     };

    case TodoListModule.ActionTypes.LOAD_INIT_TODOS:
        return {
            ...state,
            loading: true
        };

    case TodoListModule.ActionTypes.SUCCESS_INIT_TODOS:
        return {
            ...state,
            loading: false,
            loaded: true,
            data: action.payload
        };

    case TodoListModule.ActionTypes.ERROR_INIT_TODOS:
        return {
            ...state,
            loading: false
        };

    case TodoListModule.ActionTypes.CREATE_TODO:
        return {
            ...state,
            data: [
                ...state.data,
                action.payload
            ]
        };

    case TodoListModule.ActionTypes.DELETE_TODO:
        return {
            ...state,
            data: state.data.filter(todo => todo.id !== action.payload)
        };

    case TodoListModule.ActionTypes.SELECT_TODO:
        return {
            ...state,
            selectTodo: action.payload
        };

    case TodoListModule.ActionTypes.UPDATE_TODO:
        return {
            ...state,
            data: state.data.map(todo => todo.id === action.payload.id ? action.payload : todo)
        };

    default:
      return state;
  }
}
