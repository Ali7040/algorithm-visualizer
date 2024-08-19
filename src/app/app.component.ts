import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { BubbleSortVisualizerComponent } from './component/bubble-sort-visualizer/bubble-sort-visualizer.component';
import { InsertionSortVisualizerComponent } from './component/insertion-sort-visualizer/insertion-sort-visualizer.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BubbleSortVisualizerComponent,
    InsertionSortVisualizerComponent,
    NavbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'algorithm-visualizer';
}
