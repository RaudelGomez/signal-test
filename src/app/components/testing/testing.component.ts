import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-testing',
  standalone: true,
  imports: [],
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.scss'
})
export class TestingComponent {
  cont = signal<number>(0);

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.cont.set(5);
    // }, 3000);
  }

  IncrementClick(){
    this.cont.update((val: number)=> val + 1);
  }
}
