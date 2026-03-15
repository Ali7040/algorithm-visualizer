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
  isSearching = false;
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
    this.foundIndex = null;
    this.targetValue = null; // Reset the target value when generating a new array
  }

  async linearSearch(target: number) {
    this.isSearching = true;
    this.clearActiveIndexes();
    for (let i = 0; i < this.array.length; i++) {
      this.setActiveIndexes([i]);
      await this.sleep(22);

      if (this.array[i] === target) {
        this.foundIndex = i;
        break;
      }

      this.clearActiveIndexes();
    }
    this.isSearching = false;
  }

  async startLinearSearch() {
    if (this.isSearching) return;
    this.targetValue =
      this.array[Math.floor(Math.random() * this.array.length)]; // Set the target value
    await this.linearSearch(this.targetValue);
  }

  onArraySizeChange(event: Event) {
    const nextSize = Number((event.target as HTMLInputElement).value);
    this.arraySize = Math.max(20, Math.min(170, nextSize));
    if (!this.isSearching) {
      this.resetArray();
    }
  }

  onSpeedChange(event: Event) {
    const nextSpeed = Number((event.target as HTMLInputElement).value);
    this.speedFactor = Math.max(0.5, Math.min(4, nextSpeed));
    localStorage.setItem('viz-speed', String(this.speedFactor));
  }

  setActiveIndexes(indexes: number[]) {
    this.activeIndexes = new Set(indexes);
  }

  clearActiveIndexes() {
    this.activeIndexes.clear();
  }

  sleep(ms: number): Promise<void> {
    const adjustedDelay = Math.max(
      1,
      Math.floor(ms / (this.speedFactor > 0 ? this.speedFactor : 1))
    );
    return new Promise((resolve) => setTimeout(resolve, adjustedDelay));
  }
}

