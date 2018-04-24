import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZelfDoenComponent } from './zelf-doen.component';

describe('ZelfDoenComponent', () => {
  let component: ZelfDoenComponent;
  let fixture: ComponentFixture<ZelfDoenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZelfDoenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZelfDoenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
