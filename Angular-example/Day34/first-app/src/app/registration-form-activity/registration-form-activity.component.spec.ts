import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFormActivityComponent } from './registration-form-activity.component';

describe('RegistrationFormActivityComponent', () => {
  let component: RegistrationFormActivityComponent;
  let fixture: ComponentFixture<RegistrationFormActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationFormActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFormActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
