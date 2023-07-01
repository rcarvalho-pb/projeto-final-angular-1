import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteBackgroundComponent } from './white-background.component';

describe('WhiteBackgroundComponent', () => {
  let component: WhiteBackgroundComponent;
  let fixture: ComponentFixture<WhiteBackgroundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhiteBackgroundComponent]
    });
    fixture = TestBed.createComponent(WhiteBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
