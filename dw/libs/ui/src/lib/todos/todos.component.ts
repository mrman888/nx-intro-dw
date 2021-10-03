import { Component, Input } from '@angular/core';
import { Todo } from '@dw/data';

@Component({
  selector: 'dw-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  @Input() todos: Todo[] = [];
}
