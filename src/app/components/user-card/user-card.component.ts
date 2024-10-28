import { Component, computed, effect, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  name = input('', {
    transform: (value: string) => value.toUpperCase()
  });
  lastName = model('Gomez');
  email = input.required<string>();

  fullName = computed(()=>{
    return `${this.name()} ${this.lastName()}`;
  })

  active = model(false);


  constructor(){
    effect(()=>{
      console.log(`The name is ${this.name()}`);
    })
  }

  changeStatus(){
    this.active.update(value => !value);
  }

  lastNameStatus(){
    let nnn = this.lastName()
    this.lastName.set(nnn);
  }
}
