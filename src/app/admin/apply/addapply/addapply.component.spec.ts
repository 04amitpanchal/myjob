import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddapplyComponent } from './addapply.component';

describe('AddapplyComponent', () => {
  let component: AddapplyComponent;
  let fixture: ComponentFixture<AddapplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddapplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddapplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
