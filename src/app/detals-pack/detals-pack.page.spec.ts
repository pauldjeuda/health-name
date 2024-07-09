import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalsPackPage } from './detals-pack.page';

describe('DetalsPackPage', () => {
  let component: DetalsPackPage;
  let fixture: ComponentFixture<DetalsPackPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalsPackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
