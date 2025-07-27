import { Component } from '@angular/core';

@Component({
  selector: 'app-ranking',
  standalone: false,
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss'],
})
export class RankingComponent {
  imageUrl: string = 'assets/images/jpg/ranking.jpg';
}
