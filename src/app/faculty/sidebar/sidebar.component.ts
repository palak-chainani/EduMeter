// sidebar.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  menuItems = [
    { name: 'Faculty Dashboard', active: false },
    { name: 'Add Task', active: false },
    { name: 'My Task Log', active: false },
    { name: 'My summary', active: false },
    { name: 'Logout Type', active: false }, 
    // { name: 'function', active: false },
    // { name: 'Summarize to ref.', active: false },
    // { name: 'Taskskey', active: false }
  ];
}