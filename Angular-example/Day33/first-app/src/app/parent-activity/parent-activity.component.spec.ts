import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentActivityComponent } from './parent-activity.component';

describe('ParentActivityComponent', () => {
  let component: ParentActivityComponent;
  let fixture: ComponentFixture<ParentActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
