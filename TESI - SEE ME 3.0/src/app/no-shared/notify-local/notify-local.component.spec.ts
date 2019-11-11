import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyLocalComponent } from './notify-local.component';

describe('NotifyLocalComponent', () => {
  let component: NotifyLocalComponent;
  let fixture: ComponentFixture<NotifyLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifyLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifyLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
