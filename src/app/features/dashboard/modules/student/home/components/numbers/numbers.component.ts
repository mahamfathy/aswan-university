import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers',
  standalone: false,
  templateUrl: './numbers.component.html',
  styleUrl: './numbers.component.scss',
})
export class NumbersComponent {
  items = [
    {
      image: 'assets/images/png/numbers/alumins.png',
      title: 'الخريجين',
      count: 4778,
    },
    {
      image: 'assets/images/png/numbers/employee.png',
      title: 'الموظفين',
      count: 2589,
    },
    {
      image: 'assets/images/png/numbers/faculty.png',
      title: 'الكليات',
      count: 18,
    },
    {
      image: 'assets/images/png/numbers/institute.png',
      title: 'المعاهد',
      count: 2,
    },
    {
      image: 'assets/images/png/numbers/staff.png',
      title: 'هيئة التدريس',
      count: 1362,
    },
    {
      image: 'assets/images/png/numbers/student.png',
      title: 'الطلاب',
      count: 30785,
    },
  ];
}
