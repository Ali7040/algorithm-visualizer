import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeSortVisualizerComponent } from './merge-sort-visualizer.component';

describe('MergeSortVisualizerComponent', () => {
  let component: MergeSortVisualizerComponent;
  let fixture: ComponentFixture<MergeSortVisualizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MergeSortVisualizerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MergeSortVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
