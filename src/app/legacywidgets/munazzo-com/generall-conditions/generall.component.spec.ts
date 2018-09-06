import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerallComponent } from './generall.component';

describe('GenerallComponent', () => {
  let component: GenerallComponent;
  let fixture: ComponentFixture<GenerallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
