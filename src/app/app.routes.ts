import { Routes } from '@angular/router';
import { BubbleSortVisualizerComponent } from './component/bubble-sort-visualizer/bubble-sort-visualizer.component';
import { InsertionSortVisualizerComponent } from './component/insertion-sort-visualizer/insertion-sort-visualizer.component';
import { SelectSortVisualizerComponent } from './component/select-sort-visualizer/select-sort-visualizer.component';

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
];
