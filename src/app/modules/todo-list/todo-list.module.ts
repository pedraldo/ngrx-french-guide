import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TodoListRoutingModule } from './todo-list.rounting';
import { AllTodosComponent } from './components/all-todos/all-todos.component';
import { TodoListComponent } from './todo-list.component';
import { SelectTodoComponent } from './components/select-todo/select-todo.component';
import { TodoListService } from 'app/services/todo-list.service';

@NgModule({
    imports: [
        CommonModule,
        TodoListRoutingModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    declarations: [
        TodoListComponent,
        SelectTodoComponent,
        AllTodosComponent
    ],
    providers: [
        TodoListService
    ]
})
export class TodoListModule { }
