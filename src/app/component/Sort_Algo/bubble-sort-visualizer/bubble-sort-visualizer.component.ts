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
  isSorting: boolean = false; // Flag to track sorting state
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

  async bubbleSort(): Promise<void> {
    this.isSorting = true; // Start sorting
    for (let i = 0; i < this.array.length && this.isSorting; i++) {
      for (let j = 0; j < this.array.length - i - 1 && this.isSorting; j++) {
        this.setActiveIndexes([j, j + 1]);
        if (this.array[j] > this.array[j + 1]) {
          [this.array[j], this.array[j + 1]] = [
            this.array[j + 1],
            this.array[j],
          ];
          await this.sleep(24);
        }
        this.clearActiveIndexes();
      }
    }
    this.isSorting = false; // Stop sorting when done
  }

  stopSorting() {
    this.isSorting = false;
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

