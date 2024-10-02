import { Routes } from '@angular/router';
import { BubbleSortVisualizerComponent } from './component/Sort_Algo/bubble-sort-visualizer/bubble-sort-visualizer.component';
import { HeapSortVisualizerComponent } from './component/Sort_Algo/heap-sort-visualizer/heap-sort-visualizer.component';
import { InsertionSortVisualizerComponent } from './component/Sort_Algo/insertion-sort-visualizer/insertion-sort-visualizer.component';
import { MergeSortVisualizerComponent } from './component/Sort_Algo/merge-sort-visualizer/merge-sort-visualizer.component';
import { QuickSortVisualizerComponent } from './component/Sort_Algo/quick-sort-visualizer/quick-sort-visualizer.component';
import { SelectSortVisualizerComponent } from './component/Sort_Algo/select-sort-visualizer/select-sort-visualizer.component';
import { BinarySearchVisualizerComponent } from './component/Search_Algo/binary-search-visualizer/binary-search-visualizer.component';
import { LinearSearchVisualizerComponent } from './component/Search_Algo/linear-search-visualizer/linear-search-visualizer.component';
import { PreorderTraversalComponent } from './component/Tree_Algo/preorder-traversal/preorder-traversal.component';
import { PostOrderTraversalComponent } from './component/Tree_Algo/post-order-traversal/post-order-traversal.component';
import { InOrderTraversalComponent } from './component/Tree_Algo/in-order-traversal/in-order-traversal.component';

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
  {
    path: 'preorder-traversal',
    component: PreorderTraversalComponent,
  },
  {
    path: 'postorder-traversal',
    component: PostOrderTraversalComponent,
  },
  {
    path: 'inorder-traversal',
    component: InOrderTraversalComponent,
  },
];
