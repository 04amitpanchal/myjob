import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovejobComponent } from './removejob.component';

describe('RemovejobComponent', () => {
  let component: RemovejobComponent;
  let fixture: ComponentFixture<RemovejobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemovejobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovejobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
