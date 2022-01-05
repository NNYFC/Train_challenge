import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRoutespatternsComponent } from './list-routespatterns.component';

describe('ListRoutespatternsComponent', () => {
  let component: ListRoutespatternsComponent;
  let fixture: ComponentFixture<ListRoutespatternsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRoutespatternsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRoutespatternsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
