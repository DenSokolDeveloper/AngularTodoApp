import {Component, Input, Output} from '@angular/core';
import {TodoList} from '../todo-list/todo-list.component';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent {
  @Input() todo: TodoList;
  @Output() todoId = new EventEmitter<number>();
  @Output() todoAfterEdit = new EventEmitter<object>();

  deleteTodo(): void {
    this.todoId.emit(this.todo.id);
  }
  makeTodoEditable(): void {
    this.todo.editing = !this.todo.editing;
  }
  newTodoText(e): void {
    if (e.keyCode === 13) {
      console.log(this.todo.text, 'before');
      this.todo.text = e.target.innerText;
      console.log(this.todo.text, 'after');
      this.todoAfterEdit.emit(this.todo);
      this.todo.editing = !this.todo.editing;
    }
  }
}
