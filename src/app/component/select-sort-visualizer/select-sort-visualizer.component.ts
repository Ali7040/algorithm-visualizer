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

  async selectSort(): Promise<void> {
    this.isSorting = true; // Start sorting

    for (let i = 0; i < this.array.length && this.isSorting; i++) {
      let minIndex = i;
      for (let j = i + 1; j < this.array.length && this.isSorting; j++) {
        this.setActiveIndexes([i, j]); // Set active indexes for color change
        if (this.array[j] < this.array[minIndex]) {
          minIndex = j;
        }
        await this.sleep(150);
        this.clearActiveIndexes(); // Clear active indexes after comparison
      }
      if (!this.isSorting) return; // Exit if sorting was stopped

      [this.array[i], this.array[minIndex]] = [
        this.array[minIndex],
        this.array[i],
      ];
      await this.sleep(10);
    }

    this.isSorting = false; // Reset sorting flag when done
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

  stopSorting() {
    this.isSorting = false; // Set flag to stop sorting
  }
}
