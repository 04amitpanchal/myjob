import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatejobComponent } from './updatejob.component';

describe('UpdatejobComponent', () => {
  let component: UpdatejobComponent;
  let fixture: ComponentFixture<UpdatejobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatejobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatejobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
