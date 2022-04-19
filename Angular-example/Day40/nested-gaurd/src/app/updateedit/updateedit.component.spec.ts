import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateeditComponent } from './updateedit.component';

describe('UpdateeditComponent', () => {
  let component: UpdateeditComponent;
  let fixture: ComponentFixture<UpdateeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
