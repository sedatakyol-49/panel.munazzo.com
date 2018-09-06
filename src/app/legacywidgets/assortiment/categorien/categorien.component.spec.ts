import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorienComponent } from './categorien.component';

describe('CategorienComponent', () => {
  let component: CategorienComponent;
  let fixture: ComponentFixture<CategorienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
