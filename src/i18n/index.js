import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  en: {
    appName: 'Address App',
    newAddress: 'New Address',
    save: 'Save',
    cancel: 'Cancel',
    new: 'New',
    addressList: 'Address List',
    recentAddresses:'Recent Addresses',
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
    recentAddresses:'Endereços Recentes',
    registerAddress: 'Cadastrar Endereço',
    home: 'Home',
  },
};

const i18n = new VueI18n({
  locale: 'pt',
  messages,
});

export default i18n;