import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInfoActivityComponent } from './product-info-activity.component';

describe('ProductInfoActivityComponent', () => {
  let component: ProductInfoActivityComponent;
  let fixture: ComponentFixture<ProductInfoActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductInfoActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInfoActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
