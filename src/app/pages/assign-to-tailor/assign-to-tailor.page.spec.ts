import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssignToTailorPage } from './assign-to-tailor.page';

describe('AssignToTailorPage', () => {
  let component: AssignToTailorPage;
  let fixture: ComponentFixture<AssignToTailorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AssignToTailorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
