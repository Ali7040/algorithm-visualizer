import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import(
        './component/Sort_Algo/bubble-sort-visualizer/bubble-sort-visualizer.component'
      ).then((m) => m.BubbleSortVisualizerComponent),
  },
  {
    path: 'bubble-sort-visualizer',
    loadComponent: () =>
      import(
        './component/Sort_Algo/bubble-sort-visualizer/bubble-sort-visualizer.component'
      ).then((m) => m.BubbleSortVisualizerComponent),
  },
  {
    path: 'insertion-sort-visualizer',
    loadComponent: () =>
      import(
        './component/Sort_Algo/insertion-sort-visualizer/insertion-sort-visualizer.component'
      ).then((m) => m.InsertionSortVisualizerComponent),
  },
  {
    path: 'select-sort-visualizer',
    loadComponent: () =>
      import(
        './component/Sort_Algo/select-sort-visualizer/select-sort-visualizer.component'
      ).then((m) => m.SelectSortVisualizerComponent),
  },
  {
    path: 'merge-sort-visualizer',
    loadComponent: () =>
      import(
        './component/Sort_Algo/merge-sort-visualizer/merge-sort-visualizer.component'
      ).then((m) => m.MergeSortVisualizerComponent),
  },
  {
    path: 'quick-sort-visualizer',
    loadComponent: () =>
      import(
        './component/Sort_Algo/quick-sort-visualizer/quick-sort-visualizer.component'
      ).then((m) => m.QuickSortVisualizerComponent),
  },
  {
    path: 'heap-sort-visualizer',
    loadComponent: () =>
      import(
        './component/Sort_Algo/heap-sort-visualizer/heap-sort-visualizer.component'
      ).then((m) => m.HeapSortVisualizerComponent),
  },
  {
    path: 'linear-search-visualizer',
    loadComponent: () =>
      import(
        './component/Search_Algo/linear-search-visualizer/linear-search-visualizer.component'
      ).then((m) => m.LinearSearchVisualizerComponent),
  },
  {
    path: 'binary-search-visualizer',
    loadComponent: () =>
      import(
        './component/Search_Algo/binary-search-visualizer/binary-search-visualizer.component'
      ).then((m) => m.BinarySearchVisualizerComponent),
  },
  {
    path: 'preorder-traversal',
    loadComponent: () =>
      import(
        './component/Tree_Algo/preorder-traversal/preorder-traversal.component'
      ).then((m) => m.PreorderTraversalComponent),
  },
  {
    path: 'postorder-traversal',
    loadComponent: () =>
      import(
        './component/Tree_Algo/post-order-traversal/post-order-traversal.component'
      ).then((m) => m.PostOrderTraversalComponent),
  },
  {
    path: 'inorder-traversal',
    loadComponent: () =>
      import(
        './component/Tree_Algo/in-order-traversal/in-order-traversal.component'
      ).then((m) => m.InOrderTraversalComponent),
  },
  {
    path: 'counting-sort-visualizer',
    loadComponent: () =>
      import(
        './component/Sort_Algo/counting-sort/counting-sort.component'
      ).then((m) => m.CountingSortComponent),
  },
];
