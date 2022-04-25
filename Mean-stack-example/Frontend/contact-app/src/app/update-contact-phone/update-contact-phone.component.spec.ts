import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateContactPhoneComponent } from './update-contact-phone.component';

describe('UpdateContactPhoneComponent', () => {
  let component: UpdateContactPhoneComponent;
  let fixture: ComponentFixture<UpdateContactPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateContactPhoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateContactPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
