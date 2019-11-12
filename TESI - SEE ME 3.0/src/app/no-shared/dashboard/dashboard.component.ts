import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('dashboard-page');

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');

    //window.location.reload(false);  
}
ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('dashboard-page');

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
}

}
