## Documentação do Projeto CRUD em Vue 2, Vuex, Axios e Vuetify

Este projeto implementa um CRUD (Create, Read, Update, Delete) de endereços utilizando Vue 2, Vuex, Axios e Vuetify. O projeto é modularizado para facilitar a manutenção e a escalabilidade.

## Requisitos

1. Node.js v12.22.1 ou superior
2. Vue.js v2.6.11 ou superior
3. Vuex v3.6.2 ou superior
4. Vue Router v3.6.5 ou superior
5. Vuetify v2.6.0 ou superior
6. Axios v1.6.8 ou superior
7. Moment.js v2.30.1 ou superior

## Instalação

Para configurar o projeto em seu ambiente local, siga os passos abaixo:

1. Clone este repositório para o seu ambiente local:
    ```bash
    git clone https://github.com/mkamaroski1/front-end-teste.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd front-end-teste
    ```

3. Instale as dependências do projeto:
    ```bash
    npm install
    ```

4. Inicie o servidor de desenvolvimento:
    ```bash
    npm run serve
    ```

## Scripts Disponíveis

- `npm run serve`: Inicia o servidor de desenvolvimento.
- `npm run build`: Compila a aplicação para produção.
- `npm run lint`: Executa o linting nos arquivos do projeto.
- `npm run test`: Executa os testes unitários com Jest.

## Estrutura do Projeto

```plaintext
├── index.html
├── main.js
├── api
│   └── ... # abstrações para fazer requisições a API
├── components
│   ├── App.vue
│   └── ...
├── i18n
│   └── index.js # configuração do Vue I18n
├── router
│   └── index.js # configuração do Vue Router
├── store
│   ├── index.js          # onde montamos os módulos e exportamos o store
│   ├── actions.js        # ações raiz
│   ├── mutations.js      # mutações raiz
│   └── modules
│       └── addresses.js  # módulo para gerenciamento de endereços
└── tests
    ├── unit
        ├── AddressForm.spec.js
        └── RegisterAddress.spec.js
        └── AddressList.spec.js
```

## Estrutura dos Testes
Todos os componentes foram testados utilizando Jest. Os testes abrangem a renderização correta dos componentes, a interação com o usuário e a verificação das ações e mutações do Vuex.

## Estilos
Estilos Este projeto utiliza o Vuetify para estilização e componentes UI. Vuetify é uma biblioteca de componentes Material Design para Vue.js, que facilita a criação de interfaces bonitas e responsivas.

Para mais informações sobre os componentes do Vuetify e como utilizá-los, consulte a documentação oficial do Vuetify.

https://vuetifyjs.com/en/