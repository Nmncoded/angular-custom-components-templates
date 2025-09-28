import { Component, ElementRef, OnInit, viewChild, ViewChild, AfterViewInit, afterRender, afterNextRender, output, signal } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent,FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  enteredTitle = signal<string>('');
  enteredText = signal<string>('');
  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  add = output<{title: string, request: string}>();



  ngOnInit() {
    console.log('NewTicketComponent ngOnInit');
    console.log(this.form().nativeElement);
  }

  ngAfterViewInit() {
    console.log('NewTicketComponent ngAfterViewInit');
    console.log(this.form().nativeElement);
  }

  onSubmit() {
    // console.log(title, text, this.form());
    this.add.emit({title: this.enteredTitle(), request: this.enteredText()});
    // this.form().nativeElement.reset();
    this.enteredTitle.set('');
    this.enteredText.set('');
  }
}
