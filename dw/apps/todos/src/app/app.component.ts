import { Component } from '@angular/core';

interface Todo {
  title: string;
}

@Component({
  selector: 'dw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];

  addTodo() {
    // uncomment to fix the e2e test
    //   this.todos.push({
    //     title: `New todo ${Math.floor(Math.random() * 1000)}`,
    //   });
  }
}
