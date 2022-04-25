import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProfileDobComponent } from './update-profile-dob.component';

describe('UpdateProfileDobComponent', () => {
  let component: UpdateProfileDobComponent;
  let fixture: ComponentFixture<UpdateProfileDobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProfileDobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProfileDobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
