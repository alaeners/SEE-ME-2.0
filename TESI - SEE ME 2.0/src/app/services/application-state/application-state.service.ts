import { Injectable } from '@angular/core';
import { StateEnum } from './state-enum';
import { Local } from 'app/models/Local';
import { Usuario } from 'app/models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class ApplicationStateService {

  private state: StateEnum;  

  private pathToBackAfterAction: string;

  private local: Local;

  private user: Usuario;

  constructor() { }

  setState(state: StateEnum): void { this.state = state; }

  getState(): StateEnum { return this.state; }

  setPathToBack(path: string): void { this.pathToBackAfterAction = path; }

  getPathToBack(): string { return this.pathToBackAfterAction; }

  setLocalToEdit(local: Local): void { this.local = local; }

  getLocalToEdit(): Local { return this.local; }

  setUserToEdit(user: Usuario): void { this.user = user; }

  getUserToEdit(): Usuario { return this.user; }
}
