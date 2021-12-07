import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiguresListComponent } from './figures-list.component';

describe('FiguresListComponent', () => {
  let component: FiguresListComponent;
  let fixture: ComponentFixture<FiguresListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiguresListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiguresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
