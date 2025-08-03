import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasklogComponent } from './task-log.component';

describe('TasklogComponent', () => {
  let component: TasklogComponent;
  let fixture: ComponentFixture<TasklogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasklogComponent]
    });
    fixture = TestBed.createComponent(TasklogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
