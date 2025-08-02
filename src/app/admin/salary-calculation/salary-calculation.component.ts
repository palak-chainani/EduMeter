import { Component, OnInit } from '@angular/core';

interface Teacher {
  id: number;
  name: string;
  type: 'lecture' | 'practical' | 'projectMeeting';
  hours: number;
  pay: number;
}

interface Month {
  name: string;
  value: string;
}

@Component({
  selector: 'app-salary-calculation',
  templateUrl: './salary-calculation.component.html',
  styleUrls: ['./salary-calculation.component.css']
})
export class SalaryCalculationComponent implements OnInit {
  teachers: Teacher[] = [
    { id: 1, name: 'Dr. Sharma', type: 'lecture', hours: 40, pay: 16000 },
    { id: 2, name: 'Prof. Patel', type: 'practical', hours: 30, pay: 15000 },
    { id: 3, name: 'Ms. Gupta', type: 'projectMeeting', hours: 15, pay: 9000 }
  ];

  rates = {
    lecture: 400,
    practical: 500,
    projectMeeting: 600
  };

  months: Month[] = [
    { name: 'January 2023', value: '1-2023' },
    { name: 'February 2023', value: '2-2023' },
    { name: 'March 2023', value: '3-2023' }
  ];

  selectedMonth: string = this.months[0].value;
  totalPayroll: number = 0;

  ngOnInit(): void {
    this.calculateTotal();
  }

  getRate(type: 'lecture' | 'practical' | 'projectMeeting'): number {
    return this.rates[type];
  }

  updateTeacherPay(teacher: Teacher): void {
    teacher.pay = teacher.hours * this.getRate(teacher.type);
    this.calculateTotal();
  }

  calculateSalaries(): void {
    this.teachers.forEach(teacher => {
      teacher.pay = teacher.hours * this.getRate(teacher.type);
    });
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.totalPayroll = this.teachers.reduce((sum, teacher) => sum + teacher.pay, 0);
  }

  updateRates(): void {
    this.calculateSalaries();
  }

  generateReport(): void {
    console.log('Generating report for:', {
      month: this.selectedMonth,
      rates: this.rates,
      teachers: this.teachers,
      total: this.totalPayroll
    });
    alert('Report generation functionality would be implemented here');
  }
}