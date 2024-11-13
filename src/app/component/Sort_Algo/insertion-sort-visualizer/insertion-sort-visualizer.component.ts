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

  ngOnInit() {
    this.resetArray();
  }

  resetArray() {
    this.array = Array.from(
      { length: 100 },
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
        j = j - 1;
        await this.sleep(150);
        this.setActiveIndexes([j + 1, j]); // Update active indexes
      }

      this.array[j + 1] = key;
      await this.sleep(50);
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

  sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
