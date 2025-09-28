import { Component, Input, OnInit } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  @Input() testing: string = '';

  constructor() {
    console.log('constructor-1', this.testing);
    this.testing = 'test';
    console.log('constructor-2', this.testing);

  }

  ngOnInit() {
    console.log('ngOnInit', this.testing);
  }
}
