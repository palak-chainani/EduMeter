import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';

interface Month {
  name: string;
  value: string;
}

interface Teacher {
  name: string;
  type: 'lecture' | 'practical' | 'projectMeeting';
  hours: number;
  pay: number;
}

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  constructor(private databaseService: DatabaseService) {}
  monthlyTeachingData: { [month: string]: {
    lectures: number;
    practicals: number;
    projectMeetings: number;
    totalHours: number;
  }} = {
    '1-2025': { lectures: 12, practicals: 8, projectMeetings: 5, totalHours: 25 },
    '2-2025': { lectures: 10, practicals: 6, projectMeetings: 4, totalHours: 20 },
    '3-2025': { lectures: 15, practicals: 9, projectMeetings: 7, totalHours: 31 },
    '4-2025': { lectures: 14, practicals: 10, projectMeetings: 6, totalHours: 30 },
    '5-2025': { lectures: 13, practicals: 11, projectMeetings: 8, totalHours: 32 },
    '6-2025': { lectures: 16, practicals: 12, projectMeetings: 9, totalHours: 37 },
    '7-2025': { lectures: 18, practicals: 14, projectMeetings: 10, totalHours: 42 },
    '8-2025': { lectures: 20, practicals: 15, projectMeetings: 12, totalHours: 47 },
    '9-2025': { lectures: 22, practicals: 17, projectMeetings: 14, totalHours: 53 },
    '10-2025': { lectures: 24, practicals: 19, projectMeetings: 16, totalHours: 59 },
    '11-2025': { lectures: 26, practicals: 21, projectMeetings: 18, totalHours: 65 },
    '12-2025': { lectures: 28, practicals: 23, projectMeetings: 20, totalHours: 71 }
  };

  months: Month[] = [
    { name: 'January 2025', value: '1-2025' },
    { name: 'February 2025', value: '2-2025' },
    { name: 'March 2025', value: '3-2025' },
    { name: 'April 2025', value: '4-2025' },
    { name: 'May 2025', value: '5-2025' },
    { name: 'June 2025', value: '6-2025' },
    { name: 'July 2025', value: '7-2025' },
    { name: 'August 2025', value: '8-2025' },
    { name: 'September 2025', value: '9-2025' },
    { name: 'October 2025', value: '10-2025' },
    { name: 'November 2025', value: '11-2025' },
    { name: 'December 2025', value: '12-2025' }
    
  ];

  selectedMonth: string = this.months[0].value;
  teachingData = this.monthlyTeachingData[this.selectedMonth];
  totalPayroll: number = 0;

  teachers: Teacher[] = [];
  subjectDetails= this.databaseService.getSubjectDetails() || [];
  rates = {
    lecture: 400,
    practical: 500,
    projectMeeting: 600
  };

  ngOnInit(): void {
    this.initializeTeachers();
    this.calculateTotal();
  }

  initializeTeachers(): void {
    this.teachers = [
      { name: 'Prof. Sharma', type: 'lecture', hours: this.teachingData.lectures, pay: 0 },
      { name: 'Dr. Patel', type: 'practical', hours: this.teachingData.practicals, pay: 0 },
      { name: 'Ms. Gupta', type: 'projectMeeting', hours: this.teachingData.projectMeetings, pay: 0 }
    ];
    this.updateAllTeacherPay();
  }

  onMonthChange(): void {
    this.teachingData = this.monthlyTeachingData[this.selectedMonth];
    this.updateAllTeacherPay();
    this.calculateTotal();
  }

  getRate(type: 'lecture' | 'practical' | 'projectMeeting'): number {
    return this.rates[type];
  }

  updateTeacherPay(teacher: Teacher): void {
    teacher.pay = teacher.hours * this.getRate(teacher.type);
  }

  updateAllTeacherPay(): void {
    this.teachers.forEach(teacher => {
      teacher.hours = this.getHoursForType(teacher.type);
      teacher.pay = teacher.hours * this.getRate(teacher.type);
    });
  }

  getHoursForType(type: string): number {
    switch(type) {
      case 'lecture': return this.teachingData.lectures;
      case 'practical': return this.teachingData.practicals;
      case 'projectMeeting': return this.teachingData.projectMeetings;
      default: return 0;
    }
  }

  calculateTotal(): void {
    this.totalPayroll =
      (this.teachingData.lectures * this.rates.lecture) +
      (this.teachingData.practicals * this.rates.practical) +
      (this.teachingData.projectMeetings * this.rates.projectMeeting);
  }

  getMonthName(value: string): string {
    const found = this.months.find(m => m.value === value);
    return found ? found.name : '';
  }
}
