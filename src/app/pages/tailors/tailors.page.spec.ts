import { ComponentFixture, TestBed,waitForAsync  } from '@angular/core/testing';
import { TailorsPage } from './tailors.page';

describe('TailorsPage', () => {
  let component: TailorsPage;
  let fixture: ComponentFixture<TailorsPage>;

  beforeEach(waitForAsync (() => {
    fixture = TestBed.createComponent(TailorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
