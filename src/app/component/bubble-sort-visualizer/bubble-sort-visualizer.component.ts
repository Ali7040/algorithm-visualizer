import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bubble-sort-visualizer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bubble-sort-visualizer.component.html',
  styleUrls: ['./bubble-sort-visualizer.component.scss'],
})
export class BubbleSortVisualizerComponent {
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

  async bubbleSort(): Promise<void> {
    // Bubble Sort Algorithm
    for (let i = 0; i < this.array.length; i++) {
      for (let j = 0; j < this.array.length - i - 1; j++) {
        this.setActiveIndexes([j, j + 1]); // Set active indexes for color change
        if (this.array[j] > this.array[j + 1]) {
          // Swap logic
          [this.array[j], this.array[j + 1]] = [
            this.array[j + 1],
            this.array[j],
          ];
          await this.sleep(150);
        }
        this.clearActiveIndexes(); // Clear active indexes after comparison
      }
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
