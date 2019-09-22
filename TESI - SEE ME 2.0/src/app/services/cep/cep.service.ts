import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Cep } from '../../models/cep'

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: Http) { }

  buscaCep(cep: String) {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
      .toPromise()
      .then(response => {
        return this.converterRespostaParaCep(response.json())
      }).catch((error) => {
        throw error;
      });
  }

  private converterRespostaParaCep(cepNaResposta): Cep {
    const cep = new Cep();
    cep.cep = cepNaResposta.cep;
    cep.logradouro = cepNaResposta.logradouro;
    cep.bairro = cepNaResposta.bairro;
    cep.localidade = cepNaResposta.localidade;
    cep.uf = cepNaResposta.uf;
    return cep;
  }
}