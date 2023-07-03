import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxHorizontalBottomComponent } from './box-horizontal-bottom.component';

describe('BoxHorizontalBottomComponent', () => {
  let component: BoxHorizontalBottomComponent;
  let fixture: ComponentFixture<BoxHorizontalBottomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxHorizontalBottomComponent]
    });
    fixture = TestBed.createComponent(BoxHorizontalBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
