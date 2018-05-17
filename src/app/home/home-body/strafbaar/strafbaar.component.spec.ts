import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrafbaarComponent } from './strafbaar.component';

describe('StrafbaarComponent', () => {
  let component: StrafbaarComponent;
  let fixture: ComponentFixture<StrafbaarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrafbaarComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrafbaarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
