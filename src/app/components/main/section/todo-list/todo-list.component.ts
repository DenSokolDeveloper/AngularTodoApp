import {Component, OnChanges, OnInit} from '@angular/core';
import {TodosService} from '../../../../services/todos.service';

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

export class TodoListComponent implements OnInit, OnChanges{
  todos = [];

  constructor(
    private todosService: TodosService
  ) {}

  ngOnInit(): void {
    this.todos = this.todosService.getAll();
  }
  ngOnChanges(): void {
    this.todos = this.todosService.getAll();
  }
  deleteTodo(id: number): void {
    this.todosService.deleteTodo(id);
    this.ngOnChanges();
  }
  updateTodo(todo): void {
    console.log(todo);
    this.todosService.updated(todo);
    this.ngOnChanges();
  }
  addNewTodo(todo): void {
    console.log(todo);
    this.todosService.addNewTodo(todo);
    this.ngOnChanges();
  }
}
