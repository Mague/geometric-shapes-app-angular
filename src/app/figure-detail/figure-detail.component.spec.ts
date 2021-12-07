import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigureDetailComponent } from './figure-detail.component';

describe('FigureDetailComponent', () => {
  let component: FigureDetailComponent;
  let fixture: ComponentFixture<FigureDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FigureDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FigureDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
