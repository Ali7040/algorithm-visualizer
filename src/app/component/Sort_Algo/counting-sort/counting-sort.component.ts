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
  arraySize = 20;
  speedFactor = Number(localStorage.getItem('viz-speed') ?? '1');

  ngOnInit() {
    this.resetArray();
  }

  resetArray() {
    this.array = Array.from({ length: this.arraySize }, () =>
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
      if (!this.isSorting) return;
      this.countArray[num]++;
      await this.updateActiveIndexes([num]);
      await this.sleep(80);
    }

    // Step 3: Calculate cumulative counts
    for (let i = 1; i < this.countArray.length; i++) {
      if (!this.isSorting) return;
      this.countArray[i] += this.countArray[i - 1];
      await this.updateActiveIndexes([i]);
      await this.sleep(80);
    }

    // Step 4: Build the sorted array using the count array
    for (let i = this.array.length - 1; i >= 0 && this.isSorting; i--) {
      const num = this.array[i];
      const sortedIndex = this.countArray[num] - 1;
      this.sortedArray[sortedIndex] = num;
      this.countArray[num]--;
      await this.updateActiveIndexes([i, sortedIndex]);
      await this.sleep(80);
    }

    this.clearActiveIndexes();
    this.isSorting = false;
  }

  stopSorting() {
    this.isSorting = false;
  }

  async updateActiveIndexes(indexes: number[]) {
    this.activeIndexes = new Set(indexes);
    await this.sleep(30);
    this.clearActiveIndexes();
  }

  clearActiveIndexes() {
    this.activeIndexes.clear();
  }

  onArraySizeChange(event: Event) {
    const nextSize = Number((event.target as HTMLInputElement).value);
    this.arraySize = Math.max(8, Math.min(80, nextSize));
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

