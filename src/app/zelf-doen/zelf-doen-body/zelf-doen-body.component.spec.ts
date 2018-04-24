import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZelfDoenBodyComponent } from './zelf-doen-body.component';

describe('ZelfDoenBodyComponent', () => {
  let component: ZelfDoenBodyComponent;
  let fixture: ComponentFixture<ZelfDoenBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZelfDoenBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZelfDoenBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
