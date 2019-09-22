import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LocaisService } from 'app/services/local/locais.service';
import { Local } from 'app/models/Local';

@Component({
  selector: 'app-notify-local',
  templateUrl: './notify-local.component.html',
  styleUrls: ['./notify-local.component.css']
})
export class NotifyLocalComponent implements OnInit {
  email: string;
  locais: Local[];
  locaisEmail: Local[] = [];
  config: any;
  collection = [];

  constructor(private router: Router, private locaisservice: LocaisService, private route: ActivatedRoute) { }

  pageChange(newPage: number) {
    this.router.navigate(['no-shared/notify-local'], { queryParams: { page: newPage } });
  }

  ngOnInit() {
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('notify-local-page');

    this.config = {
      currentPage: 1,
      itemsPerPage: 1
    };

    this.route.queryParamMap
      .map(params => params.get('page'))
      .subscribe(page => this.config.currentPage = page);

    for (let i = 1; i <= 100; i++) {
      this.collection.push({ i });
    }

    this.locaisservice.AtualizaObservable();
    //this.locaisservice.returnLocalByEmail();
    this.locaisservice.getLocais().subscribe(locais => {
      locais.forEach(local => {
        if (local.contato.email !== ''){
          this.locaisEmail.push(local);
        }        
      });
      this.locais = locais;
    });
  }

  ngOnDestroy() {
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('notify-local-page');
  }

  enviaEmail(){
      alert('e-mail enviado com sucesso!'); 
  }

}
