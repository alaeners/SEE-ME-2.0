import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LocaisService } from 'app/services/local/locais.service';
import { Local } from 'app/models/Local';

@Component({
  selector: 'app-favorite-local',
  templateUrl: './favorite-local.component.html',
  styleUrls: ['./favorite-local.component.scss']
})

export class FavoriteLocalComponent implements OnInit, OnDestroy {
    favoritos = [];

    constructor(private router: Router) { }

    ngOnInit() {
      var body = document.getElementsByTagName('body')[0];
      body.classList.add('favorite-page');
  
      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.add('navbar-transparent');

      this.favoritos = JSON.parse(window.localStorage.getItem("nome"));
    }
    ngOnDestroy() {
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('favorite-page');
  
      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.remove('navbar-transparent');
    }

    verMais(favorito: string){ 
        this.router.navigate(['shared/list-local/list-card', "todos"], { queryParams: { nome: favorito } });   
    }

    excluir(local: Local){ 
    }
}