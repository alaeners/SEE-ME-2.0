import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeLocalComponent } from './merge-local.component';

describe('MergeLocalComponent', () => {
  let component: MergeLocalComponent;
  let fixture: ComponentFixture<MergeLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MergeLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
