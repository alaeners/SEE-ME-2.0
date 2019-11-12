import { Component, OnInit, OnDestroy } from '@angular/core';
import { CepService } from '../../services/cep/cep.service';
import { Cep } from '../../models/cep';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApplicationStateService } from '../../services/application-state/application-state.service';
import { StateEnum } from '../../services/application-state/state-enum';
import { Local } from 'app/models/Local';
import { Endereco } from 'app/models/Endereco';
import { Contato } from 'app/models/Contato';
import { LocaisService } from 'app/services/local/locais.service';
import 'rxjs/add/operator/toPromise';
import * as firebase from 'firebase';

@Component({
  selector: 'app-register-local',
  templateUrl: './register-local.component.html',
  styleUrls: ['./register-local.component.scss']
})
export class RegisterLocalComponent implements OnInit, OnDestroy {

  data: Date = new Date();
  //@ViewChild('openModal') openModal: ElementRef;
  focus;
  focus1;
  cep = new Cep();
  local = {
    nota: 0.0,
    avaliacao: 0.0,
    endereco: {} as Endereco,
    contato: {} as Contato
  } as Local;

  constructor(private router: Router, private cepService: CepService, private modalService: NgbModal, 
    private applicationState: ApplicationStateService, private locaisService: LocaisService) {
    if (applicationState.getState() === StateEnum.EDIT) {
      this.local = applicationState.getLocalToEdit();
    }
  }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('register-local-page');

    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }
  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('register-local-page');

    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }

  closeModal(content) {
    this.modalService.dismissAll(content);
  }

  buscaCep() {
    this.cepService.buscaCep(this.cep.cep)
      .then((cep: Cep) => this.cep = cep)
      .catch((error) => {
        alert('Verifique o CEP informado!');
      });
  }

  inserirLocal() {
    this.local.nome = this.local.nome.toUpperCase();
    this.local.endereco.cep = this.cep.cep;
    this.local.endereco.bairro = this.cep.bairro.toLowerCase();
    this.local.endereco.localidade = this.cep.localidade.toLowerCase();
    this.local.endereco.logradouro = this.cep.logradouro.toLowerCase();
    this.local.nota = 0.0;
    this.local.avaliacao = 0.0;

    return firebase.database().ref().child('locais').push(this.local)
      .then(() => {
        this.router.navigate(['index']);
      })
      .catch(() => {
        alert('Erro ao inserir o local.');
        this.router.navigate(['index']);
      });
  }

  isStateEdit(): boolean {
    return this.applicationState.getState() == StateEnum.EDIT;
  }

  update(): void {
    this.locaisService.updateLocal(this.local)
      .then(() => {
        alert('Local atualizado com sucesso!');
        this.router.navigate([this.applicationState.getPathToBack()]);
      })
      .catch(() => {
        alert('Erro ao atualizar o local');
        this.router.navigate([this.applicationState.getPathToBack()]);
      });
  }
  cancel(): void {
    this.router.navigate([this.applicationState.getPathToBack()]);
  }
}