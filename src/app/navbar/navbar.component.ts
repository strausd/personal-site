import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  collapse: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  onCollapse() {
    this.collapse = !this.collapse;
  }

  onNavClick() {
    if (this.collapse === false) {
      this.collapse = true;
    }
  }

}
