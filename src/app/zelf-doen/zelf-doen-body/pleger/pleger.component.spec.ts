import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlegerComponent } from './pleger.component';

describe('PlegerComponent', () => {
  let component: PlegerComponent;
  let fixture: ComponentFixture<PlegerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlegerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlegerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
