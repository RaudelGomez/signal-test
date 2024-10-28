import { Component, contentChild, ElementRef, Signal } from '@angular/core';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {
  //If im sure that the button is therre after load the page, i can use required, if not better to use | undefined, like I did in the before exercise.
  btnSeeMore: Signal<ElementRef> = contentChild.required('seeMore');

  ngAfterViewInit(): void {
    this.btnSeeMore().nativeElement.addEventListener('click',()=>{
      console.log(this.btnSeeMore().nativeElement);
    }) 
  }
}
