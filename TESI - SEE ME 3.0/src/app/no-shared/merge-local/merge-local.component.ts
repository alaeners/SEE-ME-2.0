import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationStateService } from 'app/services/application-state/application-state.service';

@Component({
  selector: 'app-merge-local',
  templateUrl: './merge-local.component.html',
  styleUrls: ['./merge-local.component.css']
})
export class MergeLocalComponent implements OnInit {

  constructor(private router: Router, applicationState: ApplicationStateService) { }

  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('merge-local-page');

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('merge-local-page');

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }


  cancel() {
    this.router.navigate(['/no-shared/dashboard']);
  }

}
