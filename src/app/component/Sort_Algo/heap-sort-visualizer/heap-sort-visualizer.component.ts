import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heap-sort-visualizer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heap-sort-visualizer.component.html',
  styleUrl: './heap-sort-visualizer.component.scss',
})
export class HeapSortVisualizerComponent implements OnInit {
  array: number[] = [];
  activeIndexes: Set<number> = new Set();
  isSorting = false; // Single flag to track sorting state

  ngOnInit() {
    this.resetArray();
  }

  resetArray() {
    this.array = Array.from(
      { length: 100 },
      () => Math.floor(Math.random() * 400) + 20
    );
    this.isSorting = false; // Reset sorting flag
  }

  async heapSort(): Promise<void> {
    this.isSorting = true; // Start sorting
    const n = this.array.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0 && this.isSorting; i--) {
      await this.heapify(n, i);
    }

    for (let i = n - 1; i > 0 && this.isSorting; i--) {
      [this.array[0], this.array[i]] = [this.array[i], this.array[0]];
      await this.heapify(i, 0);
    }

    this.isSorting = false; // Stop sorting when done
  }

  async heapify(n: number, i: number): Promise<void> {
    if (!this.isSorting) return;

    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let largest = i;

    if (left < n && this.array[left] > this.array[largest]) {
      largest = left;
    }

    if (right < n && this.array[right] > this.array[largest]) {
      largest = right;
    }

    if (largest !== i) {
      [this.array[i], this.array[largest]] = [
        this.array[largest],
        this.array[i],
      ];
      await this.heapify(n, largest);
    }
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
