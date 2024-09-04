import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeapSortVisualizerComponent } from './heap-sort-visualizer.component';

describe('HeapSortVisualizerComponent', () => {
  let component: HeapSortVisualizerComponent;
  let fixture: ComponentFixture<HeapSortVisualizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeapSortVisualizerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeapSortVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
