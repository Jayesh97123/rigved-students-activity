import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdfDemoActivityComponent } from './mdf-demo-activity.component';

describe('MdfDemoActivityComponent', () => {
  let component: MdfDemoActivityComponent;
  let fixture: ComponentFixture<MdfDemoActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdfDemoActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdfDemoActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
