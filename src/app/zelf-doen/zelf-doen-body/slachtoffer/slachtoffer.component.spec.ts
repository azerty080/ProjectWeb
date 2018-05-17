import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlachtofferComponent } from './slachtoffer.component';

describe('SlachtofferComponent', () => {
  let component: SlachtofferComponent;
  let fixture: ComponentFixture<SlachtofferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlachtofferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlachtofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
