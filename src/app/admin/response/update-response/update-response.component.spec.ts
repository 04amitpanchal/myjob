import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateResponseComponent } from './update-response.component';

describe('UpdateResponseComponent', () => {
  let component: UpdateResponseComponent;
  let fixture: ComponentFixture<UpdateResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
