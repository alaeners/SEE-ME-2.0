import { Endereco } from '../models/Endereco'
import { Contato } from '../models/Contato'

export class Local {
  id: string;
  nome: string;
  cnpj: string;
  endereco: Endereco;
  contato: Contato;
  tipo: string;
  nota: number;
  avaliacao: number;
}
