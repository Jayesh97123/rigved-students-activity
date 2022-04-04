import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectiveAndPipeActivityComponent } from './structural-directive-and-pipe-activity.component';

describe('StructuralDirectiveAndPipeActivityComponent', () => {
  let component: StructuralDirectiveAndPipeActivityComponent;
  let fixture: ComponentFixture<StructuralDirectiveAndPipeActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructuralDirectiveAndPipeActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuralDirectiveAndPipeActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
