import {
  animate,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0 }),
            animate(
              '400ms cubic-bezier(0.4, 0.0, 0.2, 1)',
              style({ opacity: 1 })
            ),
          ],
          { optional: true }
        ),

        query(
          ':leave',
          [
            animate(
              '300ms cubic-bezier(0.4, 0.0, 0.2, 1)',
              style({ opacity: 0 })
            ),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class DashboardComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'] || 'PageTransition';
  }
}
