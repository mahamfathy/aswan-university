import { Component } from '@angular/core';
import { ChartData } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { SharedModule } from '../../../../../../../shared/shared.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgChartsModule, SharedModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public studentsChartData: ChartData<'doughnut'> = {
    labels: ['الطب', 'الهندسة', 'العلوم', 'الآداب', 'التجارة'],
    datasets: [
      {
        data: [1200, 800, 600, 400, 300],
        backgroundColor: [
          '#4bc0c0',
          '#36a2eb',
          '#9966ff',
          '#ffcd56',
          '#ff6384',
        ],
        hoverOffset: 10,
      },
    ],
  };

  public professorsChartData: ChartData<'bar'> = {
    labels: ['الطب', 'الهندسة', 'العلوم', 'الآداب', 'التجارة'],
    datasets: [
      {
        label: 'عدد الأساتذة',
        data: [150, 100, 80, 50, 40],
        backgroundColor: [
          '#60A5FA',
          '#686f92ff',
          '#bea953ff',
          '#8e5ea2',
          '#f9a826',
        ],
      },
    ],
  };
}
