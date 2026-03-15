import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { NavbarComponent } from './component/shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('routeTransition', [
      transition('* <=> *', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate(
          '280ms cubic-bezier(0.2, 0.8, 0.2, 1)',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'algorithm-visualizer';
  showHero = true;

  constructor(public router: Router) {
    this.showHero = localStorage.getItem('hero-dismissed') !== 'true';
  }

  dismissHero() {
    this.showHero = false;
    localStorage.setItem('hero-dismissed', 'true');
  }
}
