export interface Tasks {
  subject: string;
  type: string;
  hours: number;
  date: Date | string; // string jab LocalStorage se aaye
  status: 'Completed' | 'Pending' | 'Rejected';
  assignedBy?: string;
}
