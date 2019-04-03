import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListRoutingModule } from './todo-list.rounting';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AllTodosComponent } from './components/all-todos/all-todos.component';
import { TodoListComponent } from './todo-list.component';
import { SelectTodoComponent } from './components/select-todo/select-todo.component';

@NgModule({
    imports: [
        CommonModule,
        TodoListRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [
        TodoListComponent,
        SelectTodoComponent,
        AllTodosComponent
    ]
})
export class TodoListModule { }