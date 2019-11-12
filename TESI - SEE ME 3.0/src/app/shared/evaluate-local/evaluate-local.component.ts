import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluate-local',
  templateUrl: './evaluate-local.component.html',
  styleUrls: ['./evaluate-local.component.css']
})
export class EvaluateLocalComponent implements OnInit, OnDestroy {
  focus;
  focus1;
  nome: string;

  constructor(private router: Router) { }

  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('evaluate-page');

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('evaluate-page');

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }

  buscaLocal(){
      this.router.navigate(['shared/list-local/list-card', "todos"], { queryParams: { nome: this.nome } });
    }
}
