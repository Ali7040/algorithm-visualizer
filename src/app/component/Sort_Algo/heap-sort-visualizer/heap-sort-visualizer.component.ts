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
  isSorting = false;

  ngOnInit() {
    this.resetArray();
  }

  resetArray() {
    this.array = Array.from(
      { length: 100 },
      () => Math.floor(Math.random() * 400) + 20
    );
    this.clearActiveIndexes();
    this.isSorting = false;
  }

  async heapSort(): Promise<void> {
    this.isSorting = true;
    const n = this.array.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0 && this.isSorting; i--) {
      await this.heapify(n, i);
    }

    for (let i = n - 1; i > 0 && this.isSorting; i--) {
      this.setActiveIndexes([0, i]);
      [this.array[0], this.array[i]] = [this.array[i], this.array[0]];
      await this.sleep(100); // Delay to show the swap animation
      await this.heapify(i, 0);
      this.clearActiveIndexes();
    }

    this.isSorting = false;
  }

  async heapify(n: number, i: number): Promise<void> {
    if (!this.isSorting) return;

    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && this.array[left] > this.array[largest]) {
      largest = left;
    }

    if (right < n && this.array[right] > this.array[largest]) {
      largest = right;
    }

    if (largest !== i) {
      this.setActiveIndexes([i, largest]);
      [this.array[i], this.array[largest]] = [
        this.array[largest],
        this.array[i],
      ];
      await this.sleep(100); // Delay to show the heapify step
      await this.heapify(n, largest);
      this.clearActiveIndexes();
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
