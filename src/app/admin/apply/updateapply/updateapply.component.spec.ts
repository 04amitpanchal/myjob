import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateapplyComponent } from './updateapply.component';

describe('UpdateapplyComponent', () => {
  let component: UpdateapplyComponent;
  let fixture: ComponentFixture<UpdateapplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateapplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateapplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
