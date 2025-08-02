import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-single-service',
  standalone: false,
  templateUrl: './single-service.component.html',
  styleUrl: './single-service.component.scss',
})
export class SingleServiceComponent {
  @Input() service: {
    title: string;
    image: string;
  } = { title: '', image: '' };
  @Output() serviceClicked = new EventEmitter<void>();
}
