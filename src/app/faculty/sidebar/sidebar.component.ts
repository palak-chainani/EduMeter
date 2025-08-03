// sidebar.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  menuItems = [
    { name: 'Faculty Dashboard', path: '/faculty/faculty-dashboard', active: false },
    { name: 'Add Task', path: '/faculty/add-task', active: false },
    { name: 'My Task Log', path:'/faculty/task-log', active: false },
    { name: 'My summary', path:'/faculty/summary', active: false },
    { name: 'Logout Type', path:'/logout', active: false }, 
    { name: 'Filter Tasks', path:'/faculty/filterbar', active: false }
 
  ];

      constructor(private router: Router) {
      // Current URL check karo
      const currentPath = this.router.url;
      
      // Jo bhi menu item ka path current URL se match kare, uska active=true karo
      this.menuItems.forEach(item => {
        item.active = currentPath.startsWith(item.path);
      });
    }

    navigateTo(path: string) {
    this.router.navigateByUrl(path);
  }
}