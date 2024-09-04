import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linear-search-visualizer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './linear-search-visualizer.component.html',
  styleUrl: './linear-search-visualizer.component.scss',
})
export class LinearSearchVisualizerComponent implements OnInit {
  array: number[] = [];
  activeIndexes: Set<number> = new Set();
  foundIndex: number | null = null;
  targetValue: number | null = null; //for the target value

  ngOnInit() {
    this.resetArray();
  }

  resetArray() {
    this.array = Array.from(
      { length: 100 },
      () => Math.floor(Math.random() * 400) + 20
    );
    this.foundIndex = null;
    this.targetValue = null; // Reset the target value when generating a new array
  }

  async linearSearch(target: number) {
    this.clearActiveIndexes();
    for (let i = 0; i < this.array.length; i++) {
      this.setActiveIndexes([i]);
      await this.sleep(100);

      if (this.array[i] === target) {
        this.foundIndex = i;
        break;
      }

      this.clearActiveIndexes();
    }
  }

  async startLinearSearch() {
    this.targetValue =
      this.array[Math.floor(Math.random() * this.array.length)]; // Set the target value
    await this.linearSearch(this.targetValue);
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
