import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-merge-sort-visualizer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './merge-sort-visualizer.component.html',
  styleUrls: ['./merge-sort-visualizer.component.scss'],
})
export class MergeSortVisualizerComponent {
  array: number[] = [];
  activeIndexes: Set<number> = new Set();
  isSorting = false; // Single flag to track sorting state
  arraySize = 90;
  speedFactor = Number(localStorage.getItem('viz-speed') ?? '1');

  ngOnInit() {
    this.resetArray();
  }

  resetArray() {
    this.array = Array.from(
      { length: this.arraySize },
      () => Math.floor(Math.random() * 400) + 20
    );
    this.isSorting = false; // Reset sorting flag
  }

  onArraySizeChange(event: Event) {
    const nextSize = Number((event.target as HTMLInputElement).value);
    this.arraySize = Math.max(20, Math.min(170, nextSize));
    if (!this.isSorting) {
      this.resetArray();
    }
  }

  onSpeedChange(event: Event) {
    const nextSpeed = Number((event.target as HTMLInputElement).value);
    this.speedFactor = Math.max(0.5, Math.min(4, nextSpeed));
    localStorage.setItem('viz-speed', String(this.speedFactor));
  }

  async mergeSort(
    array = this.array,
    start = 0,
    end = this.array.length - 1
  ): Promise<number[]> {
    if (!this.isSorting) return []; // Exit if sorting is not active
    if (start == end) {
      return [array[start]];
    }

    const middle = Math.floor((start + end) / 2);
    const left = await this.mergeSort(array, start, middle);
    const right = await this.mergeSort(array, middle + 1, end);

    return await this.merge(left, right, start);
  }

  async merge(
    left: number[],
    right: number[],
    start: number
  ): Promise<number[]> {
    if (!this.isSorting) return []; // Exit if sorting is not active

    let result: number[] = [];
    let leftIndex = 0,
      rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (!this.isSorting) return []; // Exit if sorting is not active

      this.setActiveIndexes([
        start + leftIndex,
        start + rightIndex + left.length,
      ]);

      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }

      this.array[start + result.length - 1] = result[result.length - 1];
      await this.sleep(18);
      this.clearActiveIndexes();
    }

    while (leftIndex < left.length) {
      if (!this.isSorting) return []; // Exit if sorting is not active

      result.push(left[leftIndex]);
      this.array[start + result.length - 1] = left[leftIndex];
      leftIndex++;
      await this.sleep(18);
    }

    while (rightIndex < right.length) {
      if (!this.isSorting) return []; // Exit if sorting is not active

      result.push(right[rightIndex]);
      this.array[start + result.length - 1] = right[rightIndex];
      rightIndex++;
      await this.sleep(18);
    }

    return result;
  }

  async startSorting() {
    this.isSorting = true; // Start sorting
    await this.mergeSort();
    this.isSorting = false; // Set sorting to false when done
  }

  stopSorting() {
    this.isSorting = false; // Stop sorting
  }

  setActiveIndexes(indexes: number[]) {
    this.activeIndexes = new Set(indexes);
  }

  clearActiveIndexes() {
    this.activeIndexes.clear();
  }

  sleep(ms: number): Promise<void> {
    const adjustedDelay = Math.max(
      1,
      Math.floor(ms / (this.speedFactor > 0 ? this.speedFactor : 1))
    );
    return new Promise((resolve) => setTimeout(resolve, adjustedDelay));
  }
}

