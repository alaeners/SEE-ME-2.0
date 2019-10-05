# DOCUMENTAÇÃO SEE-ME-2.0: 
# DEMO: https://seeme-16d83.web.app/index
 
O objetivo desta atividade é fazer com que vocês experimentem a construção de uma aplicação web progressiva.
Para isso, o seu grupo deve criar uma PWA que atenda aos seguintes requisitos:

 - [x] Conter pelo menos duas páginas HTML, formatadas adequadamente para smartphones por meio da CSS;
 - [x] A aplicação deve possuir um manifesto que permita a instalação na tela inicial dos dispositivos dos usuários;

##### Usar armazenamento local de dados, por meio da API Web Storage ou da API IndexedDB, considerando:
- [x] a. Os dados armazenados devem ser específicos do usuário (determinados automaticamente ou informados por meio de um formulário);
- [x] b. Os dados armazenados devem ser usados em alguma funcionalidade da aplicação (mesmo que apenas a apresentação em alguma página);

##### A aplicação deve possuir um service worker que:
- [x] a. Implemente corretamente a instalação e a ativação da aplicação;
- [x] b Permita o funcionamento offline da aplicação.

## Observações importantes:

1. O grupo deste projeto será o mesmo grupo do projeto anterior.
2. A criatividade e originalidade serão avaliadas. Em outras palavras, espera-se que a aplicação seja de fato criada pelo grupo (e não copiada da Internet ou de outro grupo), bem como ofereça alguma funcionalidade relevante (por mais simples que seja).
3. O código fonte da aplicação deve ser entregue nesta tarefa, por meio de um arquivo compactado.
4. Além desse código da aplicação, deve ser entregue um documento descrevendo a aplicação e como cada requisito listado acima foi atendido.

## Critérios de Avaliação
## Avaliação PWA

### 1. Páginas: A aplicação contém pelo menos duas páginas HTML, corretamente formatadas com CSS para uso em smartphones.
- [x] Implementado - [ ] Parcialmente Implementado - [ ] Não Implementado

#### Telas Básicas: 
1. Home > Menu Lateral 
2. Home > Menu Lateral > Login 
3. Home > Menu Lateral > About

![](TelasBasicas.gif)

#### Listar por tipo de estabelecimento: 
1. Home > Escolher Tipo > Listas por tipo

![](ListarTipo.gif)

#### Busca por nome ou endereço de estabelecimento: 
1. Home > Informar nome ou parte de endereço > Listas de dados localizados (OBSERVAÇÃO: Essa funcionalidade está em desenvolvimento)

![](BuscaPorNomeOuEndereco.gif)

#### Cadastrar um estabelecimento: 
1. Home > Cadastrar > Preencher informações > Clicar em cadastrar (OBSERVAÇÃO: CEP usa uma API(viacep) para facilitar o cadastramento das informações)

![](Cadastro.gif)

#### Favoritar um estabelecimento usando LocalStorage: 
1. Home > Listar > Clicar em Favoritar > Voltar para a Home > Clicar em Favoritos

![](
FavoritosComLocalStorage.gif)

###### 2. Originalidade/criatividade: A aplicação é original (não é copiada da Internet ou de outro grupo) e oferece alguma funcionalidade relevante.
- [x] Implementado 
- [ ] Parcialmente Implementado 
- [ ] Não Implementado

###### 3. Armazenamento local: A aplicação armazena localmente dados específicos do usuário e os utiliza (ou apresenta) em alguma funcionalidade.
- [x] Implementado 
- [ ] Parcialmente Implementado 
- [ ] Não Implementado

###### 4. Manifesto: A aplicação possui um manifesto que descreve de forma completa e suficiente como essa aplicação deve ser instalada na tela inicial dos smartphones (considerando as diferentes plataformas móveis).
- [x] Implementado 
- [ ] Parcialmente Implementado 
- [ ] Não Implementado

###### 5. Service Worker: A aplicação possui um service worker que possui métodos corretamente implementados para a sua instalação e ativação.
- [x] Implementado 
- [ ] Parcialmente Implementado 
- [ ] Não Implementado

###### 6. Funcionamento offline: A aplicação funciona localmente, sem conexão à Internet, mesmo que com funcionalidade limitada (considerando o que for pertinente).
- [x] Implementado 
- [ ] Parcialmente Implementado 
- [ ] Não Implementado

###### 7. Documentação: Há um documento que descreve as funcionalidades da aplicação e que explica como cada requisito da aplicação (previsto no enunciado da tarefa) foi implementado.
- [ ] Implementado 
- [x] Parcialmente Implementado 
- [ ] Não Implementado
