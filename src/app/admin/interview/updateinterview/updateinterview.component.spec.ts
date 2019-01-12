import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateinterviewComponent } from './updateinterview.component';

describe('UpdateinterviewComponent', () => {
  let component: UpdateinterviewComponent;
  let fixture: ComponentFixture<UpdateinterviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateinterviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateinterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
