import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertionSortVisualizerComponent } from './insertion-sort-visualizer.component';

describe('InsertionSortVisualizerComponent', () => {
  let component: InsertionSortVisualizerComponent;
  let fixture: ComponentFixture<InsertionSortVisualizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertionSortVisualizerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsertionSortVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
