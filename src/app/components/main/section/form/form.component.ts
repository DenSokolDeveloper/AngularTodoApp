import {Component, EventEmitter, Output} from '@angular/core';
import {TodosService} from '../../../../services/todos.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
  @Output() newTodo = new EventEmitter<object>();
  newTitle = '';
  constructor(
    private todosService: TodosService
  ) {}
  save(e): void {
    if (e.keyCode === 13) {
      this.newTodo.emit({title: this.newTitle});
      this.newTitle = '';
    }
  }
}
