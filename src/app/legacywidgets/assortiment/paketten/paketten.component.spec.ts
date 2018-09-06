import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PakettenComponent } from './paketten.component';

describe('PakettenComponent', () => {
  let component: PakettenComponent;
  let fixture: ComponentFixture<PakettenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PakettenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PakettenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
