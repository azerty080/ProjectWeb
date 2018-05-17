import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeksueleIntimidatieComponent } from './seksuele-intimidatie.component';

describe('SeksueleIntimidatieComponent', () => {
  let component: SeksueleIntimidatieComponent;
  let fixture: ComponentFixture<SeksueleIntimidatieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeksueleIntimidatieComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeksueleIntimidatieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
