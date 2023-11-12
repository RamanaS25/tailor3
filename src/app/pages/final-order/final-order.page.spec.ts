import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FinalOrderPage } from './final-order.page';

describe('FinalOrderPage', () => {
  let component: FinalOrderPage;
  let fixture: ComponentFixture<FinalOrderPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FinalOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
