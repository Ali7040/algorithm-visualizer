import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  dropdownStates = {
    sort: false,
    search: false,
    traversal: false,

    // Add more dropdowns here as needed
  };
  toggleDropdown(type: keyof typeof this.dropdownStates) {
    this.dropdownStates[type] = !this.dropdownStates[type];

    for (const key in this.dropdownStates) {
      if (key !== type) {
        this.dropdownStates[key as keyof typeof this.dropdownStates] = false;
      }
    }
  }
}
