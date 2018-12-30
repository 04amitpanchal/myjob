import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JquereryLoginComponent } from './jquerery-login.component';

describe('JquereryLoginComponent', () => {
  let component: JquereryLoginComponent;
  let fixture: ComponentFixture<JquereryLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JquereryLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JquereryLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
