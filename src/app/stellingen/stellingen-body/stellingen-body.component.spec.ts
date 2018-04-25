import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StellingenBodyComponent } from './stellingen-body.component';

describe('StellingenBodyComponent', () => {
  let component: StellingenBodyComponent;
  let fixture: ComponentFixture<StellingenBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StellingenBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StellingenBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
