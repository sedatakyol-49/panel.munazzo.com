import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MywebstoreComponent } from './mywebstore.component';

describe('MywebstoreComponent', () => {
  let component: MywebstoreComponent;
  let fixture: ComponentFixture<MywebstoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MywebstoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MywebstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
