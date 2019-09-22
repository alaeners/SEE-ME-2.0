import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateLocalComponent } from './evaluate-local.component';

describe('EvaluateLocalComponent', () => {
  let component: EvaluateLocalComponent;
  let fixture: ComponentFixture<EvaluateLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluateLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluateLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
