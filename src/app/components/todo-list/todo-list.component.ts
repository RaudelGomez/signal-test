import { CommonModule } from '@angular/common';
import { Component, effect, signal, WritableSignal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

interface Task {
  title: string;
  description: string;
  priority: string;
}

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  selectedPriority: string = '0';

  tasks: WritableSignal<Task[]> = signal<Task[]>(
    localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')!) : []
  );

  constructor(){
    effect(()=>{
      console.log(`We have ${this.tasks().length} tasks`);
      localStorage.setItem('tasks', JSON.stringify(this.tasks()));
    })
    
  }

  onSubmit(formular: NgForm){
    if(formular.submitted && formular.form.valid){
      let newTask: Task = {
        title: formular.value.title,
        description: formular.value.description,
        priority: this.selectedPriority
      }
      this.tasks.set([...this.tasks(), newTask]);
    }
    console.log(this.tasks());
  }

  removeLi(index: number){
    console.log(index);
    const currentTasks = this.tasks();
    const updateTasks = currentTasks.filter((task, i)=> i !== index);
    this.tasks.set(updateTasks);
  }
}
