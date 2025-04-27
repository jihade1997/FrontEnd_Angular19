import { Component, signal } from '@angular/core';
import { HeavyChartComponent } from "../heavy-chart/heavy-chart.component";
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  imports: [HeavyChartComponent,RouterModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  todos = signal<string[]>([]);
  newTodo = '';

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.update(list => [...list, this.newTodo.trim()]);
      this.newTodo = '';
    }
  }
  deleteTodo(todo: string): void {
    this.todos.update(list => list.filter(item => item !== todo)); // remove the todo from the list
  }
}
