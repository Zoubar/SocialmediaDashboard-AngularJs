import { Component } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss'],
})
export class LeftNavComponent {
  isBurgerMenuActive: boolean = true;
  account: boolean = true;

  constructor() {}

  menuElms = [
    { name: 'Home', icon: 'home', routerLink: '/home' },
    { name: 'Messages', icon: 'message', routerLink: '/messages' },
    { name: 'Profile', icon: 'account_box', routerLink: '/profile' },
    { name: 'Saved Post', icon: 'save', routerLink: '/saved' },
    { name: 'Settings', icon: 'settings', routerLink: '/settings' },
  ];

  onToggleAccount(): void {
    this.account = !this.account;
  }

  // Toggle Mobile Burger menu Method
  onMenuToggle(): void {
    this.isBurgerMenuActive = !this.isBurgerMenuActive;
  }
}
