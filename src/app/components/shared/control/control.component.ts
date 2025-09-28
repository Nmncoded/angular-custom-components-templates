import { AfterContentInit, afterRender, afterNextRender, Component, contentChild, ContentChild, ElementRef, HostBinding, input, viewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent implements AfterContentInit {
  // @HostBinding('class') className = 'control';
  label = input.required<string>();
  // @ContentChild('input') control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private control = contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  constructor() {
    console.log('Control component constructor');
    // afterRender(() => {
    //   console.log('Control component afterRender');
    // });
    // afterNextRender(() => {
    //   console.log('Control component afterNextRender');
    // });
  }

  ngAfterContentInit() {
    console.log('ControlComponent ngAfterContentInit');
    console.log(this.control());
  }

  onClick () {
    console.log('ControlComponent clicked');
    // this.control?.nativeElement.focus();
    console.log(this.control());
  }
}
