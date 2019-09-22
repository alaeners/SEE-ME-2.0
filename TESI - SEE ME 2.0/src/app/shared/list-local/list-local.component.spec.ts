import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLocalComponent } from './list-local.component';

describe('ListLocalComponent', () => {
  let component: ListLocalComponent;
  let fixture: ComponentFixture<ListLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
