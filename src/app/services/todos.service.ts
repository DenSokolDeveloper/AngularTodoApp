import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos = [
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
  getAll(): object[] {
    return this.todos;
  }
  deleteTodo(id: number): void {
    this.todos = this.todos.filter(value => value.id !== id);
    console.log(this.todos);
  }
  updated(todo): void {
    const todoIndex = this.todos.findIndex(el => el.id === todo.id);
    if (todoIndex !== 1){
      this.todos.splice(todoIndex, 1, todo);
    }
    console.log(this.todos);
  }
  addNewTodo({title}): void {
    this.todos = [...this.todos, {id: this.generateId(), title, editing: false, text: 'Enter todo'}];
    console.log(this.todos);
  }
  generateId(): number {
    return this.todos.length + 1;
  }
  constructor() { }
}
