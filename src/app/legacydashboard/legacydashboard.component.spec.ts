import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegacydashboardComponent } from './legacydashboard.component';

describe('LegacydashboardComponent', () => {
  let component: LegacydashboardComponent;
  let fixture: ComponentFixture<LegacydashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegacydashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegacydashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
