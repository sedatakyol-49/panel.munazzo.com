import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcvComponent } from './ccv.component';

describe('CcvComponent', () => {
  let component: CcvComponent;
  let fixture: ComponentFixture<CcvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
