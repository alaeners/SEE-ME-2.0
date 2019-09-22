import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'
import { AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Local } from '../../models/Local'
import { Question } from 'app/models/Question';
import 'rxjs/add/operator/map';
import { Evaluation } from 'app/models/Evaluation';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LocaisService {

  LocaisCollection: AngularFirestoreCollection<Local>;
  Locais: Observable<Local[]>
  constructor(private afs: AngularFirestore, private db: AngularFireDatabase) {
    this.Locais = this.afs.collection('locais').snapshotChanges().map(
      changes => {
        return changes.map(
          a => {
            const data = a.payload.doc.data() as Local;
            data.id = a.payload.doc.id;
            return data;
          });
      });
  }

  AtualizaObservable(){
    this.Locais = this.afs.collection('locais').snapshotChanges().map(
      changes => {
        return changes.map(
          a => {
            const data = a.payload.doc.data() as Local;
            data.id = a.payload.doc.id;
            return data;
          });
      });
  }

  getLocais() {
    return this.Locais;
  }

  returnLocalByNome(nome: string) {
    this.Locais = this.afs.collection('locais', ref => ref.where('nome', '==', nome)).snapshotChanges().map(
      changes => {
        return changes.map(
          a => {
            const data = a.payload.doc.data() as Local;
            data.id = a.payload.doc.id;
            return data;
          });
      });
  }

  getDocumentById(id: string): AngularFirestoreDocument<Local> {
    return this.afs.collection('locais').doc(id);
  }

  deleteById(id: string) {
    return this.getDocumentById(id).delete();
  }

  updateLocal(local: Local): Promise<void> {
    return this.getDocumentById(local.nome).update(local);
  }

  saveEvaluation(local: Local, evaluationQuestions: Array<Question>): Promise<void> {
    
    
  
    local.avaliacao++;
    let evaluationNote = this.calculateEvaluation(evaluationQuestions);
    return this.createEvaluation(local.nome, evaluationNote)
      .then(() => {
        local.nota = evaluationNote.note;
        if (local.avaliacao > 0.0){
          local.nota = ((local.nota + evaluationNote.note) / local.avaliacao);
      } else { 
        local.nota = evaluationNote.note;
      }
        return this.updateLocal(local);
      })
      .catch();
  }

  private createEvaluation(id: string, evaluation: Evaluation){
    return  firebase.database().ref().child('locais').child().push(this.local)
    .then(() => {
      console.log("Qual é a nota:"+ this.local.nota);
      this.router.navigate(['index']);
    })
    .catch(() => {
      alert('Erro ao inserir o local.');
      this.router.navigate(['index']);
    });
    }

  private calculateEvaluation(evaluationQuestions: Array<Question>): Evaluation {
    let evaluationNote = { note: 0 } as Evaluation;

    evaluationQuestions.forEach(q => {
      if (q.option[0].value) {
        evaluationNote.note++;
      }

      if (q.option[0].value) {
        evaluationNote[q.id] = q.option[0].value;
      } else {
        evaluationNote[q.id] = false;
      }

    });

    return evaluationNote;
  }

/*  GetAll(){
    return this.db.list('locais')
    .snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
    );
  }*/

  
}


