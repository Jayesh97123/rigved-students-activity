import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProfilePhoneComponent } from './update-profile-phone.component';

describe('UpdateProfilePhoneComponent', () => {
  let component: UpdateProfilePhoneComponent;
  let fixture: ComponentFixture<UpdateProfilePhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProfilePhoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProfilePhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
