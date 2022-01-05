import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPredicteddepartureComponent } from './list-predicteddeparture.component';

describe('ListPredicteddepartureComponent', () => {
  let component: ListPredicteddepartureComponent;
  let fixture: ComponentFixture<ListPredicteddepartureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPredicteddepartureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPredicteddepartureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
