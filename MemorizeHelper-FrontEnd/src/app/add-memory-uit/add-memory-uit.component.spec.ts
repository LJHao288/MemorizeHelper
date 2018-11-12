import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMemoryUitComponent } from './add-memory-uit.component';

describe('AddMemoryUitComponent', () => {
  let component: AddMemoryUitComponent;
  let fixture: ComponentFixture<AddMemoryUitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMemoryUitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMemoryUitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
