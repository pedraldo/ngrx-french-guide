import { Todo } from '@Models/todo';

export namespace TodoListModule {
    export enum ActionTypes {
        // INIT_TODOS = '[todoList] Init Todos',
        LOAD_INIT_TODOS = '[todoList] Load Init Todos',
        SUCCESS_INIT_TODOS = '[todoList] Success Init Todos',
        ERROR_INIT_TODOS = '[todoList] Error Init Todos',
        CREATE_TODO = '[todoList] Create Todo',
        DELETE_TODO = '[todoList] Delete Todo',
        SELECT_TODO = '[todoList] Select Todo',
        UPDATE_TODO = '[todoList] Update Todo'
    }

    // export class InitTodos {
    //     readonly type = ActionTypes.INIT_TODOS;
    //     constructor(public payload: Todo[]) {}
    // }

    export class LoadInitTodos {
        readonly type = ActionTypes.LOAD_INIT_TODOS;
    }

    export class SuccessInitTodos {
        readonly type = ActionTypes.SUCCESS_INIT_TODOS;
        constructor(public payload: Todo[]) {}
    }

    export class ErrorInitTodos {
        readonly type = ActionTypes.ERROR_INIT_TODOS;
    }

    export class CreateTodo {
        readonly type = ActionTypes.CREATE_TODO;
        constructor(public payload: Todo) {}
    }

    export class DeleteTodo {
        readonly type = ActionTypes.DELETE_TODO;
        constructor(public payload: number) {}
    }

    export class SelectTodo {
        readonly type = ActionTypes.SELECT_TODO;
        constructor(public payload: Todo) {}
    }

    export class UpdateTodo {
        readonly type = ActionTypes.UPDATE_TODO;
        constructor(public payload: Todo) {}
    }

    export type Actions = LoadInitTodos| SuccessInitTodos | ErrorInitTodos | CreateTodo | DeleteTodo | SelectTodo | UpdateTodo;
}
