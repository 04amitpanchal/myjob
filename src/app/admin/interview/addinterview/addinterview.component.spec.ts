import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinterviewComponent } from './addinterview.component';

describe('AddinterviewComponent', () => {
  let component: AddinterviewComponent;
  let fixture: ComponentFixture<AddinterviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddinterviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddinterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
