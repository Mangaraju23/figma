import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  logo_name!: string;
  search_icon!: string;
  notification_icon!: string;
  account_icon!: string;

  constructor() {}

  ngOnInit(): void {
    this.logo_name = 'AVA_Logo.png';
    this.search_icon = 'SEARCH_ICON.svg';
    this.notification_icon = 'NOTIFICATION_ICON.svg';
    this.account_icon = 'ACCOUNT_ICON.svg';
  }
}
