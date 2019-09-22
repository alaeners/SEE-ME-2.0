import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'app/services/auth/auth.service';
import { Usuario } from 'app/models/Usuario';
import { UserService } from 'app/services/user/user.service';
import { ApplicationStateService } from '../../../services/application-state/application-state.service';
import { StateEnum } from '../../../services/application-state/state-enum';

@Component({
  selector: 'app-user-action',
  templateUrl: './user-action.component.html',
  styleUrls: ['./user-action.component.scss']
})
export class UserActionComponent implements OnInit {

  focus;
  focus1;
  user = {
    nome: '',
    email: '',
    password: ''
  } as Usuario;
  
  constructor(private router: Router, private authService: AuthService, private firestore: AngularFirestore,
    private userService: UserService, private applicationState: ApplicationStateService) { 
      if (applicationState.getState() === StateEnum.EDIT) {
        this.user = applicationState.getUserToEdit();
      }

    }

  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('user-action-page');

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('user-action-page');

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }

  signup() {
    const data = {
      email: this.user.email,
      nome: this.user.nome,
      senha: this.user.password
    };
    
    this.authService.signUp(this.user.email, this.user.password)
      .then((res) => {
        this.firestore.collection('usuarios').add(data);
        this.router.navigate(['no-shared/dashboard']);
      })
      .catch(function (error) { alert(error) });
      this.router.navigate(['no-shared/dashboard']);

  }

  update(): void {
    this.userService.updateUser(this.user)
      .then(() => {
        alert('Local atualizado com sucesso!');
        this.router.navigate([this.applicationState.getPathToBack()]);
      })
      .catch(() => {
        alert('Erro ao atualizar o local');
        this.router.navigate([this.applicationState.getPathToBack()]);
      });
  }

}
