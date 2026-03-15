import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-select-sort-visualizer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-sort-visualizer.component.html',
  styleUrls: ['./select-sort-visualizer.component.scss'],
})
export class SelectSortVisualizerComponent {
  array: number[] = [];
  activeIndexes: Set<number> = new Set();
  isSorting = false; // flag to track sorting state
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

  async selectSort(): Promise<void> {
    this.isSorting = true; // Start sorting

    for (let i = 0; i < this.array.length && this.isSorting; i++) {
      let minIndex = i;
      for (let j = i + 1; j < this.array.length && this.isSorting; j++) {
        this.setActiveIndexes([i, j]); // Set active indexes for color change
        if (this.array[j] < this.array[minIndex]) {
          minIndex = j;
        }
        await this.sleep(22);
        this.clearActiveIndexes(); // Clear active indexes after comparison
      }
      if (!this.isSorting) return; // Exit if sorting was stopped

      [this.array[i], this.array[minIndex]] = [
        this.array[minIndex],
        this.array[i],
      ];
      await this.sleep(8);
    }

    this.isSorting = false; // Reset sorting flag when done
  }

  setActiveIndexes(indexes: number[]) {
    this.activeIndexes = new Set(indexes);
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

  stopSorting() {
    this.isSorting = false; // Set flag to stop sorting
  }
}

