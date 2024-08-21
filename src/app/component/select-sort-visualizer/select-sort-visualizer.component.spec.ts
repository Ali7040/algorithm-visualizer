import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSortVisualizerComponent } from './select-sort-visualizer.component';

describe('SelectSortVisualizerComponent', () => {
  let component: SelectSortVisualizerComponent;
  let fixture: ComponentFixture<SelectSortVisualizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectSortVisualizerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectSortVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
