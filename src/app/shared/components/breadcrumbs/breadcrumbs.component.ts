import { Component, Input } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss',
})
export class BreadcrumbsComponent {
  @Input() breadcrumbs: { label: string; routerLink: string }[] = [];
}
