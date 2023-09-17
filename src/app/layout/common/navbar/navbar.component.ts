import { Component, OnInit } from '@angular/core';
import { MenuItem ,PrimeIcons,} from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  /* -------------------------------------------------------------------------- */
  /*                                 Constructor                                */
  /* -------------------------------------------------------------------------- */
  // constructor() {}

  /* -------------------------------------------------------------------------- */
  /*                                 Life Circle                                */
  /* -------------------------------------------------------------------------- */

  items: MenuItem[] | undefined;

  ngOnInit() {
    /* -------------------------------------------------------------------------- */
    /*                                  Variables                                 */
    /* -------------------------------------------------------------------------- */
    this.items = [
      {
        label: 'Home',
        routerLink:'/home'
      },
      {
        label: 'Stores',
        routerLink:'/stores'
      },
      {
        label: 'Basket',
        routerLink:'/basket'
      },
      {
        label: 'Contact',
        routerLink:'/contact'
      },
    ];
  }
}
