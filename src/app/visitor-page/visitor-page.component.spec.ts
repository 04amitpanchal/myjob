import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorPageComponent } from './visitor-page.component';

describe('VisitorPageComponent', () => {
  let component: VisitorPageComponent;
  let fixture: ComponentFixture<VisitorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
