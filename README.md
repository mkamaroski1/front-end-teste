## Documentação do Projeto CRUD em Vue 2, Vuex, Axios e Vuetify

Este projeto implementa um CRUD (Create, Read, Update, Delete) de endereços utilizando Vue 2, Vuex, Axios e Vuetify. O projeto é modularizado para facilitar a manutenção e a escalabilidade.

## Requisitos

Node.js v12.22.1 ou superior
Vue.js v2.6.11 ou superior
Vuex v3.6.2 ou superior
Vue Router v3.6.5 ou superior
Vuetify v2.6.0 ou superior
Axios v1.6.8 ou superior
Moment.js v2.30.1 ou superior

## Instalação

Para configurar o projeto em seu ambiente local, siga os passos abaixo:

Clone este repositório para o seu ambiente local:

bash
Copiar código
git clone https://github.com/mkamaroski1/front-end-teste.git
Navegue até o diretório do projeto:

bash
Copiar código
cd front-end-teste
Instale as dependências do projeto:

bash
Copiar código
npm install
Inicie o servidor de desenvolvimento:

bash
Copiar código
npm run serve

## Scripts Disponíveis
npm run serve: Inicia o servidor de desenvolvimento.
npm run build: Compila a aplicação para produção.
npm run lint: Executa o linting nos arquivos do projeto.

## Estrutura do Projeto
plaintext
Copiar código
index.html

index.html
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
└── store
    ├── index.js          # onde montamos os módulos e exportamos o store
    ├── actions.js        # ações raiz
    ├── mutations.js      # mutações raiz
    └── modules
        ├── adresses.js     


## Descrição das Pastas e Arquivos
index.html: Arquivo HTML principal do projeto.
main.js: Arquivo JavaScript principal onde a aplicação Vue é inicializada.
api: Contém abstrações para fazer requisições à API externa (ViaCep).
components: Contém os componentes Vue utilizados na aplicação.
App.vue: Componente raiz da aplicação.
store: Contém a configuração do Vuex para gerenciamento de estado.
index.js: Configura os módulos e exporta o store.
actions.js: Define ações raiz do Vuex.
mutations.js: Define mutações raiz do Vuex.
modules/addresses.js: Define o módulo Vuex para gerenciamento de endereços.

## Estilos

Estilos
Este projeto utiliza o Vuetify para estilização e componentes UI. Vuetify é uma biblioteca de componentes Material Design para Vue.js, que facilita a criação de interfaces bonitas e responsivas.

Para mais informações sobre os componentes do Vuetify e como utilizá-los, consulte a documentação oficial do Vuetify.

https://vuetifyjs.com/en/

## Internacionalização (i18n)

Este projeto utiliza Vue I18n para internacionalização, permitindo a tradução dos textos da interface para diferentes idiomas. A configuração do Vue I18n é realizada da seguinte forma:

Configuração do Vue I18n
Instale o Vue I18n:

bash
Copiar código
npm install vue-i18n
Configure o Vue I18n no projeto:

javascript
Copiar código
// i18n.js
import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

```js
const messages = {
  en: {
    appName: 'Address App',
    newAddress: 'New Address',
    save: 'Save',
    cancel: 'Cancel',
    new: 'New',
    addressList: 'Address List',
    recentAddresses: 'Recent Addresses',
    registerAddress: 'Register Address',
    home: 'Home',
  },
  pt: {
    appName: 'Aplicativo de Endereços',
    newAddress: 'Novo Endereço',
    save: 'Salvar',
    cancel: 'Cancelar',
    new: 'Novo',
    addressList: 'Lista de Endereços',
    recentAddresses: 'Endereços Recentes',
    registerAddress: 'Cadastrar Endereço',
    home: 'Home',
  },
};

const i18n = new VueI18n({
  locale: 'pt', // Idioma padrão
  messages,
});

export default i18n;

/*Importe e utilize o i18n na inicialização da aplicação:
javascript
Copiar código*/

// main.js
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import i18n from './i18n';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  i18n, // Adicione i18n aqui
  render: h => h(App),
}).$mount('#app');

/*Utilização do Vue I18n nos Componentes
Para utilizar as traduções nos componentes Vue, utilize a função $t fornecida pelo Vue I18n.*/

vue
Copiar código
<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>{{ $t('appName') }}</h1>
        <v-btn @click="changeLanguage('en')">English</v-btn>
        <v-btn @click="changeLanguage('pt')">Português</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    },
  },
};
</script>
```

