import { Todo } from '@Models/todo';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppState } from '@StoreConfig';
import { select, Store } from '@ngrx/store';
import { TodoListModule } from '@Actions/todo-list.action';
import { selectTodos$, selectTodosLoading$ } from '@Selectors/todo-list.selector';
import { Router } from '@angular/router';
// import { TodoListService } from '@Services/todo-list.service';

@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html',
  styleUrls: ['./all-todos.component.scss']
})
export class AllTodosComponent implements OnInit {
  private todosLength: number;
  public todos$: Observable<Todo[]>;
  public todoForm: FormGroup;
  public todosLoading: Observable<boolean>;

  constructor(
    private router: Router,
    private store: Store<AppState>,
    // private todoListService: TodoListService,
    @Inject(FormBuilder) fb: FormBuilder,
  ) {
    this.todos$ = this.store.pipe(
      select(selectTodos$),
      tap(todos => {
        this.todosLength = todos.length;
      })
    );
    /* A éviter
      this.todo$.subscribe((todos) => {
        this.todos = todos;
      });

      Dans ce cas de figure, pas de mutation sur la liste
      de todos dans le component, inutile de faire un subscribe.
      Cela évite également de faire un unsubscribe dans le OnDestroy
      et utiliser un *ngIf dans le <ul> dans le cas ou la donnée est vide.
	  */

    this.todoForm = fb.group({
      title: ['', Validators.required],
      completed: [false, Validators]
    });

    this.todosLoading = this.store.pipe(
      select(selectTodosLoading$)
    );
  }

  ngOnInit() {
    // this.todoListService.getTodos().subscribe(todos => {
    //   this.store.dispatch(new TodoListModule.InitTodos(todos));
    // });

    this.store.dispatch(new TodoListModule.LoadInitTodos());
  }

  public createTodo(todo: Todo) {
    const payload = {
      ...todo,
      userId: 1,
      id: this.todosLength + 1
    };

    this.store.dispatch(new TodoListModule.CreateTodo(payload));
    this.todoForm.reset();
  }

  public deleteTodo(id: number) {
    this.store.dispatch(new TodoListModule.DeleteTodo(id));
  }

  public selectTodo(todo: Todo) {
    this.store.dispatch(new TodoListModule.SelectTodo(todo));
    this.router.navigate(['/todo-list/select-todo'])
  }
}
