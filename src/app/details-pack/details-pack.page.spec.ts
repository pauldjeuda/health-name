import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsPackPage } from './details-pack.page';

describe('DetailsPackPage', () => {
  let component: DetailsPackPage;
  let fixture: ComponentFixture<DetailsPackPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
