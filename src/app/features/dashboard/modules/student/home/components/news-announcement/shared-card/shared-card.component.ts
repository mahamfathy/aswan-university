import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shared-card',
  standalone: true,
  imports: [],
  templateUrl: './shared-card.component.html',
  styleUrl: './shared-card.component.scss',
})
export class SharedCardComponent {
  @Input() newsImage: string = '';
  @Input() newsTitle: string = '';
  @Input() newsDescription: string = '';

  @Output() cardClicked = new EventEmitter<void>();
}
