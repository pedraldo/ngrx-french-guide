import { AppState } from './../index';
import { createSelector } from '@ngrx/store';

export const selectTodoListState$ = (state: AppState) => state.todos;

export const selectTodos$ = createSelector(
  selectTodoListState$,
  todos => todos.data
);

export const selectTodoSelected$ = createSelector(
  selectTodoListState$,
  todos => todos.selectTodo
);
