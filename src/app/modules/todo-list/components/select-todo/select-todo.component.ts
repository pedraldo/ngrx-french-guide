import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { Todo } from '@Models/todo';
import { Observable } from 'rxjs';
import { AppState } from '@StoreConfig';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { selectTodoSelected$ } from '@Selectors/todo-list.selector';
import { tap } from 'rxjs/operators';
import { TodoListModule } from '@Actions/todo-list.action';

@Component({
  selector: 'app-select-todo',
  templateUrl: './select-todo.component.html',
  styleUrls: ['./select-todo.component.scss']
})
export class SelectTodoComponent implements OnInit {
  public updateTodoForm: FormGroup;
  public selectTodo$: Observable<Todo>;
  public selectTodo: Todo;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    @Inject(FormBuilder) fb: FormBuilder
  ) { 
    this.selectTodo$ = store.pipe(
      select(selectTodoSelected$),
      tap(todo => this.selectTodo = todo)
    );

    this.selectTodo$.subscribe();

    this.updateTodoForm = fb.group({
      title: ['', Validators.required],
      completed: [false, Validators]
    });    
  }

  ngOnInit() {
    if (this.selectTodo) {
      this.updateTodoForm.patchValue({
        title: this.selectTodo.title,
        completed: this.selectTodo.completed
      });
    }
  }

  public updateTodo(formValue) {
    const payload = Object.assign(this.selectTodo, formValue);
    this.store.dispatch(new TodoListModule.UpdateTodo(payload));
    return this.router.navigate(['/todo-list/all-todos']);
  }

}