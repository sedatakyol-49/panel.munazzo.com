import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightspeedComponent } from './lightspeed.component';

describe('LightspeedComponent', () => {
  let component: LightspeedComponent;
  let fixture: ComponentFixture<LightspeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightspeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightspeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
