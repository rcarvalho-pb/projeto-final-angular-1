import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxHorizontalComponent } from './box-horizontal-top.component';

describe('BoxHorizontalComponent', () => {
  let component: BoxHorizontalComponent;
  let fixture: ComponentFixture<BoxHorizontalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxHorizontalComponent]
    });
    fixture = TestBed.createComponent(BoxHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
