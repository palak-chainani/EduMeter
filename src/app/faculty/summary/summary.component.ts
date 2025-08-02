// summary.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  // Data can be moved to a service later
  summaryData = {
    totals: {
      lectures: 30,
      practicals: 18,
      hours: 69
    },
    subjects: [
      { name: 'Mathematics', lectures: 12, practicals: 4, hours: 24 },
      { name: 'Physics', lectures: 8, practicals: 6, hours: 20 },
      { name: 'Computer Science', lectures: 10, practicals: 8, hours: 25 }
    ]
  };
}