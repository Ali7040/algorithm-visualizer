import { Routes } from '@angular/router';
import { BubbleSortVisualizerComponent } from './component/bubble-sort-visualizer/bubble-sort-visualizer.component';
import { InsertionSortVisualizerComponent } from './component/insertion-sort-visualizer/insertion-sort-visualizer.component';
import { SelectSortVisualizerComponent } from './component/select-sort-visualizer/select-sort-visualizer.component';
import { MergeSortVisualizerComponent } from './component/merge-sort-visualizer/merge-sort-visualizer.component';
import { LinearSearchVisualizerComponent } from './component/linear-search-visualizer/linear-search-visualizer.component';
import { BinarySearchVisualizerComponent } from './component/binary-search-visualizer/binary-search-visualizer.component';
import { QuickSortVisualizerComponent } from './component/quick-sort-visualizer/quick-sort-visualizer.component';
import { HeapSortVisualizerComponent } from './component/heap-sort-visualizer/heap-sort-visualizer.component';

export const routes: Routes = [
  {
    path: '',
    component: BubbleSortVisualizerComponent,
  },
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
    path: 'quick-sort-visualizer',
    component: QuickSortVisualizerComponent,
  },
  {
    path: 'heap-sort-visualizer',
    component: HeapSortVisualizerComponent,
  },
  {
    path: 'linear-search-visualizer',
    component: LinearSearchVisualizerComponent,
  },
  {
    path: 'binary-search-visualizer',
    component: BinarySearchVisualizerComponent,
  },
];
