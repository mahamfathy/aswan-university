import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  standalone: false,
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss',
})
export class BreadcrumbsComponent {
  @Input() breadcrumbs: { label: string; routerLink: string }[] = [];
}
