import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularMemUnitsComponent } from './popular-mem-units.component';

describe('PopularMemUnitsComponent', () => {
  let component: PopularMemUnitsComponent;
  let fixture: ComponentFixture<PopularMemUnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularMemUnitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularMemUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
