import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counting-sort',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counting-sort.component.html',
  styleUrl: './counting-sort.component.scss',
})
export class CountingSortComponent {
  array: number[] = [];
  countArray: number[] = [];
  sortedArray: number[] = [];
  activeIndexes: Set<number> = new Set();
  isSorting: boolean = false;

  ngOnInit() {
    this.resetArray();
  }

  resetArray() {
    this.array = Array.from({ length: 20 }, () =>
      Math.floor(Math.random() * 10)
    );
    this.sortedArray = new Array(this.array.length).fill(0);
    this.countArray = [];
    this.isSorting = false;
  }

  async countingSort(): Promise<void> {
    this.isSorting = true;

    // Step 1: Initialize count array with zero values
    const max = Math.max(...this.array);
    this.countArray = new Array(max + 1).fill(0);

    // Step 2: Count occurrences of each element
    for (let num of this.array) {
      this.countArray[num]++;
      await this.updateActiveIndexes([num]);
      await this.sleep(300);
    }

    // Step 3: Calculate cumulative counts
    for (let i = 1; i < this.countArray.length; i++) {
      this.countArray[i] += this.countArray[i - 1];
      await this.updateActiveIndexes([i]);
      await this.sleep(300);
    }

    // Step 4: Build the sorted array using the count array
    for (let i = this.array.length - 1; i >= 0 && this.isSorting; i--) {
      const num = this.array[i];
      const sortedIndex = this.countArray[num] - 1;
      this.sortedArray[sortedIndex] = num;
      this.countArray[num]--;
      await this.updateActiveIndexes([i, sortedIndex]);
      await this.sleep(300);
    }

    this.clearActiveIndexes();
    this.isSorting = false;
  }

  stopSorting() {
    this.isSorting = false;
  }

  async updateActiveIndexes(indexes: number[]) {
    this.activeIndexes = new Set(indexes);
    await this.sleep(150);
    this.clearActiveIndexes();
  }

  clearActiveIndexes() {
    this.activeIndexes.clear();
  }

  sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
