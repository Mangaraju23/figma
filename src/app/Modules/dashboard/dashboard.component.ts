import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // constructor( private _title: Title, _route:ActivatedRoute) {let title = _route.snapshot.data['title']; this._title.setTitle(title); }
  ngOnInit(): void {}

}
