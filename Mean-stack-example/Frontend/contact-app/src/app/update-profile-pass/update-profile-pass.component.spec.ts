import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProfilePassComponent } from './update-profile-pass.component';

describe('UpdateProfilePassComponent', () => {
  let component: UpdateProfilePassComponent;
  let fixture: ComponentFixture<UpdateProfilePassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProfilePassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProfilePassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
