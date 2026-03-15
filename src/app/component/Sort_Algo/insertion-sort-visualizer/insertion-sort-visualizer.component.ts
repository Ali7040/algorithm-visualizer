import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insertion-sort-visualizer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './insertion-sort-visualizer.component.html',
  styleUrls: ['./insertion-sort-visualizer.component.scss'],
})
export class InsertionSortVisualizerComponent implements OnInit {
  array: number[] = [];
  activeIndexes: Set<number> = new Set();
  isSorting: boolean = false;
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
    this.isSorting = false; // Ensure sorting flag is reset
    this.clearActiveIndexes(); // Clear active indexes when resetting
  }

  async InsertionSort(): Promise<void> {
    if (this.isSorting) return; // Prevent multiple concurrent sort operations
    this.isSorting = true; // Start sorting

    // Insertion Sort Algorithm
    for (let i = 1; i < this.array.length && this.isSorting; i++) {
      let key = this.array[i];
      let j = i - 1;
      this.setActiveIndexes([i, j]); // Set active indexes for color change

      while (j >= 0 && this.array[j] > key && this.isSorting) {
        this.array[j + 1] = this.array[j];
        j -= 1;
        await this.sleep(24);
        this.setActiveIndexes([j + 1, j]); // Update active indexes
      }

      this.array[j + 1] = key;
      await this.sleep(12);
      this.clearActiveIndexes(); // Clear active indexes after insertion
    }

    this.isSorting = false; // Mark sorting as finished
  }

  setActiveIndexes(indexes: number[]) {
    this.activeIndexes = new Set(indexes);
  }

  stopSorting() {
    this.isSorting = false; // Stop sorting by setting the flag
  }

  clearActiveIndexes() {
    this.activeIndexes.clear();
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

  sleep(ms: number): Promise<void> {
    const adjustedDelay = Math.max(
      1,
      Math.floor(ms / (this.speedFactor > 0 ? this.speedFactor : 1))
    );
    return new Promise((resolve) => setTimeout(resolve, adjustedDelay));
  }
}


