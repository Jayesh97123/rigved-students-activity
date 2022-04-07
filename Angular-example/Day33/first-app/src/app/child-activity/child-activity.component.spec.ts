import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildActivityComponent } from './child-activity.component';

describe('ChildActivityComponent', () => {
  let component: ChildActivityComponent;
  let fixture: ComponentFixture<ChildActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
