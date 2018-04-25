import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StellingenComponent } from './stellingen.component';

describe('StellingenComponent', () => {
  let component: StellingenComponent;
  let fixture: ComponentFixture<StellingenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StellingenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StellingenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
