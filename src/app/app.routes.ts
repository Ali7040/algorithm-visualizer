import { Routes } from '@angular/router';
import { BubbleSortVisualizerComponent } from './component/bubble-sort-visualizer/bubble-sort-visualizer.component';
import { InsertionSortVisualizerComponent } from './component/insertion-sort-visualizer/insertion-sort-visualizer.component';
import { SelectSortVisualizerComponent } from './component/select-sort-visualizer/select-sort-visualizer.component';
import { MergeSortVisualizerComponent } from './component/merge-sort-visualizer/merge-sort-visualizer.component';
import { LinearSearchVisualizerComponent } from './component/linear-search-visualizer/linear-search-visualizer.component';

export const routes: Routes = [
  {
    path: 'bubble-sort-visualizer',
    component: BubbleSortVisualizerComponent,
  },
  {
    path: 'insertion-sort-visualizer',
    component: InsertionSortVisualizerComponent,
  },
  {
    path: 'select-sort-visualizer',
    component: SelectSortVisualizerComponent,
  },
  {
    path: 'merge-sort-visualizer',
    component: MergeSortVisualizerComponent,
  },
  {
    path: 'linear-search-visualizer',
    component: LinearSearchVisualizerComponent,
  },
];
