import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TestingComponent } from './components/testing/testing.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { FormsModule } from '@angular/forms';
import { FormDecoratorComponent } from './components/form-decorator/form-decorator.component';
import { ArticleComponent } from './components/article/article.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TestingComponent, TodoListComponent, UserCardComponent, FormsModule, FormDecoratorComponent, ArticleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  names: string = 'Raudel'
  status: boolean = true;
  lastName: string = 'Gommm'

  changeSon(){
    console.log(this.status);
  }
}
