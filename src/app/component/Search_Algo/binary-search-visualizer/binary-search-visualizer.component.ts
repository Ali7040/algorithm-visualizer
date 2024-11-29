import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binary-search-visualizer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './binary-search-visualizer.component.html',
  styleUrl: './binary-search-visualizer.component.scss',
})
export class BinarySearchVisualizerComponent implements OnInit {
  array: number[] = [];
  activeIndexes: Set<number> = new Set();
  midIndex: number | null = null;
  foundIndex: number | null = null;
  targetValue: number | null = null;
  isSearching: boolean = false; // Tracks if a search is ongoing
  cancelSearchFlag: boolean = false; // Tracks if a search is canceled

  ngOnInit() {
    this.resetArray();
  }

  resetArray() {
    if (this.isSearching) {
      this.cancelSearch(); // Stop any ongoing search
    }

    this.array = Array.from(
      { length: 100 },
      () => Math.floor(Math.random() * 400) + 20
    ).sort((a, b) => a - b); // Create and sort the new array
    this.foundIndex = null;
    this.targetValue = null;
    this.midIndex = null;
    this.activeIndexes.clear();
  }

  async binarySearch(target: number) {
    this.isSearching = true;
    this.cancelSearchFlag = false; // Reset cancel flag

    let left = 0;
    let right = this.array.length - 1;

    while (left <= right && !this.cancelSearchFlag) {
      this.midIndex = Math.floor((left + right) / 2);
      this.setActiveIndexes([left, right]);
      await this.sleep(250);

      if (this.array[this.midIndex] === target) {
        this.foundIndex = this.midIndex;
        break;
      } else if (this.array[this.midIndex] < target) {
        left = this.midIndex + 1;
      } else {
        right = this.midIndex - 1;
      }

      this.clearActiveIndexes();
    }

    this.isSearching = false;
  }

  async startBinarySearch() {
    if (this.isSearching) return; // Prevent starting another search while one is active

    this.targetValue =
      this.array[Math.floor(Math.random() * this.array.length)];
    await this.binarySearch(this.targetValue);
  }

  cancelSearch() {
    this.cancelSearchFlag = true; // Mark the search for cancellation
    this.isSearching = false; // Reset search state
    this.clearActiveIndexes();
    this.foundIndex = null;
    this.midIndex = null;
  }

  setActiveIndexes(indexes: number[]) {
    this.activeIndexes = new Set(indexes);
  }

  clearActiveIndexes() {
    this.activeIndexes.clear();
    this.midIndex = null;
  }

  sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
