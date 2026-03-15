import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AnimationSpeedService {
  readonly speedFactor = signal(1);

  constructor() {
    const stored = Number(localStorage.getItem('viz-speed') ?? '1');
    if (!Number.isNaN(stored) && stored > 0) {
      this.speedFactor.set(stored);
    }
  }

  setSpeedFactor(value: number) {
    const normalized = Math.min(4, Math.max(0.5, value));
    this.speedFactor.set(normalized);
    localStorage.setItem('viz-speed', String(normalized));
  }
}
