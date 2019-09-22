import { Component, OnInit } from '@angular/core';
import { Question } from 'app/models/Question';
import { QuestionOption } from 'app/models/QuestionOption';
import { LocaisService } from 'app/services/local/locais.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Local } from 'app/models/Local';
import { DocumentSnapshot } from '@angular/fire/firestore';

@Component({
  selector: 'app-evaluate-screen',
  templateUrl: './evaluate-screen.component.html',
  styleUrls: ['./evaluate-screen.component.scss']
})
export class EvaluateScreenComponent implements OnInit {
  local = {} as Local;

  constructor(private router: Router, private route: ActivatedRoute, private locaisservice: LocaisService) {
    this.locaisservice.getDocumentById(this.route.snapshot.paramMap.get('id')).get()
      .subscribe((local: DocumentSnapshot<Local>) => {
        this.local = local.data();
      });
  }

  evaluationQuestions: Array<Question>;

  ngOnInit() {
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('evaluate-screen-page');

    this.evaluationQuestions = [
      {
        id: 'cao_guia',
        desc: 'Permite a entrada de cão guia?',
        option: [
          {
            id: 'radioSimPergunta1',
            desc: 'Sim',
            name: 'inlineRadioOptions1'
          },
          {
            id: 'radioNaoPergunta1',
            desc: 'Não',
            name: 'inlineRadioOptions1'
          }
        ] as Array<QuestionOption>
      } as Question,
      {
        id: 'banheiros_adaptados',
        desc: 'Possui banheiros adaptados',
        option: [
          {
            id: 'radioSimPergunta2',
            desc: 'Sim',
            name: 'inlineRadioOptions2'
          },
          {
            id: 'radioNaoPergunta2',
            desc: 'Não',
            name: 'inlineRadioOptions2'
          }
        ] as Array<QuestionOption>
      } as Question,
      {
        id: 'marcadores_chao',
        desc: 'Possui marcadores de chão?',
        option: [
          {
            id: 'radioSimPergunta3',
            desc: 'Sim',
            name: 'inlineRadioOptions3'
          },
          {
            id: 'radioNaoPergunta3',
            desc: 'Não',
            name: 'inlineRadioOptions3'
          }
        ] as Array<QuestionOption>
      } as Question,
      {
        id: 'cegas_baixa_cegueira',
        desc: 'As pessoas são treinadas para atender pessoas cegas ou com baixa cegueira?',
        option: [
          {
            id: 'radioSimPergunta4',
            desc: 'Sim',
            name: 'inlineRadioOptions4'
          },
          {
            id: 'radioNaoPergunta4',
            desc: 'Não',
            name: 'inlineRadioOptions4'
          }
        ] as Array<QuestionOption>
      } as Question,
      {
        id: 'menu_braile',
        desc: 'Os cocumentos, menus possuem braile para pessoas cegas?',
        option: [
          {
            id: 'radioSimPergunta5',
            desc: 'Sim',
            name: 'inlineRadioOptions5'
          },
          {
            id: 'radioNaoPergunta5',
            desc: 'Não',
            name: 'inlineRadioOptions5'
          }
        ] as Array<QuestionOption>
      } as Question,
      {
        id: 'transcrever_experiencia',
        desc: 'Possuí alguém treinado para transcrever a experiência da utilização do serviço?',
        option: [
          {
            id: 'radioSimPergunta6',
            desc: 'Sim',
            name: 'inlineRadioOptions6'
          },
          {
            id: 'radioNaoPergunta6',
            desc: 'Não',
            name: 'inlineRadioOptions6'
          }
        ] as Array<QuestionOption>
      } as Question,
    ] as Array<Question>
  }

  ngOnDestroy() {
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');

    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('evaluate-screen-page');
  }

  saveEvaluation(): void {
    this.locaisservice.saveEvaluation(this.local, this.evaluationQuestions)
      .then((data) => {
        alert('Avaliação cadastrada');
        this.router.navigate(['shared/list-local']);

      })
      .catch((err) => {
        alert('Ocorreu um erro ao cadastrar a avaliação' + err);
      });
  }
  cancel(){
    this.router.navigate(['/shared/list-local']);
  }

}
