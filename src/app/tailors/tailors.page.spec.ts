import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TailorsPage } from './tailors.page';

describe('TailorsPage', () => {
  let component: TailorsPage;
  let fixture: ComponentFixture<TailorsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TailorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
