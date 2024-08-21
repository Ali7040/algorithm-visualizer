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

  ngOnInit() {
    this.resetArray();
  }

  resetArray() {
    this.array = Array.from(
      { length: 100 },
      () => Math.floor(Math.random() * 400) + 20
    );
  }

  async selectSort(): Promise<void> {
    // Selection Sort Algorithm
    for (let i = 0; i < this.array.length; i++) {
      let minIndex = i;
      for (let j = i + 1; j < this.array.length; j++) {
        this.setActiveIndexes([i, j]); // Set active indexes for color change
        if (this.array[j] < this.array[minIndex]) {
          minIndex = j;
        }
        await this.sleep(150);
        this.clearActiveIndexes(); // Clear active indexes after comparison
      }
      [this.array[i], this.array[minIndex]] = [
        this.array[minIndex],
        this.array[i],
      ];
      await this.sleep(10);
    }
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
