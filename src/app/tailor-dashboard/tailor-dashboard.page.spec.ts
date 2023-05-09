import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TailorDashboardPage } from './tailor-dashboard.page';

describe('TailorDashboardPage', () => {
  let component: TailorDashboardPage;
  let fixture: ComponentFixture<TailorDashboardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TailorDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
