import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Usuario } from '../../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  UserCollection: AngularFirestoreCollection<Usuario>;
  Usuarios: Observable<Usuario[]>
  constructor(private afs: AngularFirestore) {
    this.Usuarios = this.afs.collection('usuarios').snapshotChanges().map(
      changes => {
        return changes.map(
          a => {
            const data = a.payload.doc.data() as Usuario;
            data.id = a.payload.doc.id;
            return data;
          });
      });
  }

  getUser() {
    return this.Usuarios;
  }

  AtualizaObservable(){
    this.Usuarios = this.afs.collection('usuarios').snapshotChanges().map(
      changes => {
        return changes.map(
          a => {
            const data = a.payload.doc.data() as Usuario;
            data.id = a.payload.doc.id;
            return data;
          });
      });
  }


  updateUser(user: Usuario): Promise<void> {
    return this.getDocumentById(user.nome).update(user);
  }

  getDocumentById(id: string): AngularFirestoreDocument<Usuario> {
    return this.afs.collection('usuarios').doc(id);
  }

  deleteById(id: string) {
    return this.getDocumentById(id).delete();
  }
}
