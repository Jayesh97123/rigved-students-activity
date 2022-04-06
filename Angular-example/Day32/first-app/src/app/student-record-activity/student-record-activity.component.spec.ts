import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRecordActivityComponent } from './student-record-activity.component';

describe('StudentRecordActivityComponent', () => {
  let component: StudentRecordActivityComponent;
  let fixture: ComponentFixture<StudentRecordActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentRecordActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRecordActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
