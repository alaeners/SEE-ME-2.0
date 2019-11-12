import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireAction } from '@angular/fire/database';
import { Observable, BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-list-local',
  templateUrl: './list-local.component.html',
  styleUrls: ['./list-local.component.scss']
})
export class ListLocalComponent implements OnInit, OnDestroy {

  data: Date = new Date();
  focus;
  focus1;
  items$: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
  size$: BehaviorSubject<string|null>;

  constructor(private route: ActivatedRoute, private router: Router) {
  }
  filterBy(size: string|null) {
    this.size$.next(size);
  }
  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('list-local-page');

    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }
  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('list-local-page');

    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }
  
  shopping() {
    this.router.navigate(['shared/list-local/list-card', 'shopping']);
  }
  bar() {
    this.router.navigate(['shared/list-local/list-card', 'bar']);
  }
  pracas() {
    this.router.navigate(['shared/list-local/list-card', 'praca']);
  }

  cultural() {
    this.router.navigate(['shared/list-local/list-card', 'cultural']);
  }

  musical() {
    this.router.navigate(['shared/list-local/list-card', 'musical']);
  }

  outros() {
    this.router.navigate(['shared/list-local/list-card', 'outros']);
  }
}
