import { AppState } from './../index';
import { createSelector } from '@ngrx/store';

export const selectTodoListState$ = (state: AppState) => state.todos;

export const selectTodos$ = createSelector(
  selectTodoListState$,
  todos => todos.data
);

export const selectTodosSelected$ = createSelector(
  selectTodoListState$,
  todos => todos.selectTodo
);

export const selectTodosLoading$ = createSelector(
  selectTodoListState$,
  todos => todos.loading
);

export const selectTodosLoaded$ = createSelector(
  selectTodoListState$,
  todos => todos.loaded
);
