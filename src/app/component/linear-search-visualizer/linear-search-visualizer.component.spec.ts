import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearSearchVisualizerComponent } from './linear-search-visualizer.component';

describe('LinearSearchVisualizerComponent', () => {
  let component: LinearSearchVisualizerComponent;
  let fixture: ComponentFixture<LinearSearchVisualizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinearSearchVisualizerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LinearSearchVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
