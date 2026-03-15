import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

type DropdownKey = 'sort' | 'search' | 'traversal';

interface MenuItem {
  label: string;
  route: string;
}

interface NavMenu {
  key: DropdownKey;
  label: string;
  items: MenuItem[];
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  readonly navMenus: NavMenu[] = [
    {
      key: 'sort',
      label: 'Sort Algorithms',
      items: [
        { label: 'Bubble Sort', route: '/bubble-sort-visualizer' },
        { label: 'Insertion Sort', route: '/insertion-sort-visualizer' },
        { label: 'Selection Sort', route: '/select-sort-visualizer' },
        { label: 'Merge Sort', route: '/merge-sort-visualizer' },
        { label: 'Quick Sort', route: '/quick-sort-visualizer' },
        { label: 'Heap Sort', route: '/heap-sort-visualizer' },
        { label: 'Counting Sort', route: '/counting-sort-visualizer' },
      ],
    },
    {
      key: 'search',
      label: 'Search Algorithms',
      items: [
        { label: 'Linear Search', route: '/linear-search-visualizer' },
        { label: 'Binary Search', route: '/binary-search-visualizer' },
      ],
    },
    {
      key: 'traversal',
      label: 'Tree Traversal',
      items: [
        { label: 'Preorder Traversal', route: '/preorder-traversal' },
        { label: 'Postorder Traversal', route: '/postorder-traversal' },
        { label: 'Inorder Traversal', route: '/inorder-traversal' },
      ],
    },
  ];

  dropdownStates = {
    sort: false,
    search: false,
    traversal: false,
  };

  isDarkMode = false;
  mobileMenuOpen = false;

  constructor() {
    this.initializeTheme();
  }

  toggleDropdown(type: DropdownKey) {
    this.dropdownStates[type] = !this.dropdownStates[type];

    for (const key in this.dropdownStates) {
      if (key !== type) {
        this.dropdownStates[key as keyof typeof this.dropdownStates] = false;
      }
    }
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    if (!this.mobileMenuOpen) {
      this.closeMenus();
    }
  }

  closeMenus() {
    this.dropdownStates = {
      sort: false,
      search: false,
      traversal: false,
    };
    this.mobileMenuOpen = false;
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
  }

  private initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme ? savedTheme === 'dark' : true;
    this.applyTheme();
  }

  private applyTheme() {
    const theme = this.isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
}
