import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedFormActivityComponent } from './nested-form-activity.component';

describe('NestedFormActivityComponent', () => {
  let component: NestedFormActivityComponent;
  let fixture: ComponentFixture<NestedFormActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedFormActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedFormActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
