import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-sort-visualizer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quick-sort-visualizer.component.html',
  styleUrls: ['./quick-sort-visualizer.component.scss'],
})
export class QuickSortVisualizerComponent implements OnInit {
  array: number[] = [];
  activeIndexes: Set<number> = new Set();
  isSorting: boolean = false;

  ngOnInit() {
    this.resetArray();
  }

  resetArray() {
    this.array = Array.from(
      { length: 100 },
      () => Math.floor(Math.random() * 400) + 20
    );
    this.isSorting = false;
  }

  async quickSort(
    array = this.array,
    start = 0,
    end = this.array.length - 1
  ): Promise<void> {
    // No need to return array
    if (!this.isSorting) return;
    if (start >= end) return;

    const pivot = await this.partition(array, start, end);
    await this.quickSort(array, start, pivot - 1);
    await this.quickSort(array, pivot + 1, end);
  }

  async partition(
    array: number[],
    start: number,
    end: number
  ): Promise<number> {
    if (!this.isSorting) return -1;

    const pivot = array[end];
    let pivotIndex = start;

    for (let i = start; i < end; i++) {
      this.setActiveIndexes([i, pivotIndex]);
      if (array[i] < pivot) {
        [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
        pivotIndex++;
        await this.sleep(150);
      }
      this.clearActiveIndexes();
    }

    [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]];
    return pivotIndex;
  }

  async sort() {
    this.isSorting = true;
    await this.quickSort();
    this.isSorting = false;
  }

  stopSorting() {
    this.isSorting = false;
  }

  setActiveIndexes(indexes: number[]) {
    this.activeIndexes = new Set(indexes);
  }

  clearActiveIndexes() {
    this.activeIndexes.clear();
  }

  sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
