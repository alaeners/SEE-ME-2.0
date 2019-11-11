import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateScreenComponent } from './evaluate-screen.component';

describe('EvaluateScreenComponent', () => {
  let component: EvaluateScreenComponent;
  let fixture: ComponentFixture<EvaluateScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluateScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluateScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
