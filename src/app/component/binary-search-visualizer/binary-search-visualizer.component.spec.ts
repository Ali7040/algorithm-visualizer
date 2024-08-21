import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinarySearchVisualizerComponent } from './binary-search-visualizer.component';

describe('BinarySearchVisualizerComponent', () => {
  let component: BinarySearchVisualizerComponent;
  let fixture: ComponentFixture<BinarySearchVisualizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BinarySearchVisualizerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BinarySearchVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
