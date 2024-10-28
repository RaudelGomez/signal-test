import { Component, ElementRef, Signal, viewChild, viewChildren } from '@angular/core';

@Component({
  selector: 'app-form-decorator',
  standalone: true,
  imports: [],
  templateUrl: './form-decorator.component.html',
  styleUrl: './form-decorator.component.scss'
})
export class FormDecoratorComponent {
  inputName: Signal<ElementRef | undefined> = viewChild('inputName');
  buttons: Signal<readonly ElementRef[]> = viewChildren('btn')

  onClick(){
    console.log(this.inputName()?.nativeElement);
    // this.inputName()?.nativeElement.focus();
    this.inputName()!.nativeElement.style.borderColor = 'red';

    for (const btn of this.buttons()) {
      // btn.nativeElement.style.backgroundColor = 'blue';
      if(btn.nativeElement.id == 'hi'){
        console.log(btn.nativeElement);
        btn.nativeElement.style.backgroundColor = 'blue'
      }
    }
  }
}
