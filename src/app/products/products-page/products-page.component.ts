import { Component, inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { TodoState } from '../../state/todos.state';
import { Todo } from '../../../todo.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss'
})
export class ProductsPageComponent {
  
  store = inject(Store)

  todos$: Observable<Todo[]> = this.store.select(TodoState.todos)

}
