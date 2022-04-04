import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptObjectActivityComponent } from './javascript-object-activity.component';

describe('JavascriptObjectActivityComponent', () => {
  let component: JavascriptObjectActivityComponent;
  let fixture: ComponentFixture<JavascriptObjectActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptObjectActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptObjectActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
