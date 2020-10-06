import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {MainComponent} from './components/main/main.component';
import {FooterComponent} from './components/footer/footer.component';
import {SectionComponent} from './components/main/section/section.component';
import {TodoListComponent} from './components/main/section/todo-list/todo-list.component';
import {TodoItemComponent} from './components/main/section/todo-item/todo-item.component';
import {FormComponent} from './components/main/section/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    SectionComponent,
    TodoListComponent,
    TodoItemComponent,
    FormComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
