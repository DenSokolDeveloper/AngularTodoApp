import {Component, OnInit} from '@angular/core';

export interface TodoList {
  title: string;
  text: string;
  id: number;
  editing: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit{
  todos = [];

  ngOnInit(): void {
    this.todos = [
      {id: 1, title: 'Task 1', editing: false, text: 'Go for a walk with dog'},
      {id: 2, title: 'Task 2', editing: false, text: 'Eat some vegetables'},
      {id: 3, title: 'Task 3', editing: false, text: 'Jump into sea'},
      {id: 4, title: 'Task 4', editing: false, text: 'Look film'},
      {id: 5, title: 'Task 5', editing: false, text: 'Read a book'},
      {id: 6, title: 'Task 6', editing: false, text: 'Do sports'},
      {id: 7, title: 'Task 7', editing: false, text: 'Learn Angular'},
      {id: 8, title: 'Task 8', editing: false, text: 'Kiss wife'},
      {id: 9, title: 'Task 9', editing: false, text: 'Send message'},
      {id: 10, title: 'Task 10', editing: false, text: 'Use git'},
    ];
  }
  deleteTodo(id: number) {
    console.log(this.todos);
    this.todos = this.todos.filter(value => value.id !== id);
  }
  updated(todo) {
    const todoIndex = this.todos.findIndex(el => el.id === todo.id);
    if (todoIndex !== 1){
      this.todos.splice(todoIndex, 1, todo);
    }
  }
}
