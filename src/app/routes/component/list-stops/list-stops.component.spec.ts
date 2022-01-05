import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStopsComponent } from './list-stops.component';

describe('ListStopsComponent', () => {
  let component: ListStopsComponent;
  let fixture: ComponentFixture<ListStopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
