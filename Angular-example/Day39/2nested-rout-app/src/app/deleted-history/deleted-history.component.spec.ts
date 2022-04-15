import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedHistoryComponent } from './deleted-history.component';

describe('DeletedHistoryComponent', () => {
  let component: DeletedHistoryComponent;
  let fixture: ComponentFixture<DeletedHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletedHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
