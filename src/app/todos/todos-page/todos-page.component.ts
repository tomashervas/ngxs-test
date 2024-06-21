import { Component, inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddTodo, RemoveTodo, ToogleTodo } from '../../state/todo.actions';
import { Todo } from '../../../todo.model';
import { TodoState } from '../../state/todos.state';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrl: './todos-page.component.scss'
})
export class TodosPageComponent {
  store = inject(Store)
  todos$: Observable<Todo[]> = this.store.select(TodoState.todos);


  newTodoTitle = '';

  addTodo() {
    if(this.newTodoTitle.trim()){
      this.store.dispatch(new AddTodo(this.newTodoTitle))
      this.newTodoTitle = '';
    }
  }


  toggleTodo(id: number) {
    this.store.dispatch(new ToogleTodo(id))
  }

  removeTodo(id: number) {
    this.store.dispatch(new RemoveTodo(id))
  }
}
