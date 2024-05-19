import { mount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueI18n from 'vue-i18n'
import Vuex from 'vuex'
import AddressList from '@/components/AddressList.vue'
import moment from 'moment'

Vue.use(Vuetify) 

const localVue = createLocalVue()
localVue.use(VueI18n)
localVue.use(Vuex)

const i18n = new VueI18n({
  locale: 'en',
  messages: {
    en: {
      recentAddresses: 'Recent Addresses'
    }
  }
})

describe('AddressList.vue', () => {
  let vuetify
  let store

  beforeEach(() => {
    vuetify = new Vuetify({
      icons: {
        iconfont: 'mdi', 
      },
    })
    store = new Vuex.Store({
      modules: {
        addresses: {
          namespaced: true,
          getters: {
            recentAddresses: () => [
              {
                logradouro: 'Rua Teste',
                complemento: 'Apt 101',
                bairro: 'Bairro Teste',
                localidade: 'Cidade Teste',
                uf: 'UF',
                createdAt: moment().subtract(1, 'days').toISOString(),
                updatedAt: moment().toISOString()
              }
            ]
          }
        }
      }
    })
  })

  it('renders the table headers correctly', () => {
    const wrapper = mount(AddressList, { localVue, vuetify, i18n, store })
    const headers = wrapper.findAll('thead th')
    expect(headers.length).toBe(7)
    expect(headers.at(0).text()).toBe('Logradouro')
    expect(headers.at(1).text()).toBe('Complemento')
    expect(headers.at(2).text()).toBe('Bairro')
    expect(headers.at(3).text()).toBe('Localidade')
    expect(headers.at(4).text()).toBe('UF')
    expect(headers.at(5).text()).toBe('Data de Criação')
    expect(headers.at(6).text()).toBe('Data de Atualização')
  })

  it('renders the recent addresses correctly', () => {
    const wrapper = mount(AddressList, { localVue, vuetify, i18n, store })
    const rows = wrapper.findAll('tbody tr')
    expect(rows.length).toBe(1)
    const columns = rows.at(0).findAll('td')
    expect(columns.at(0).text()).toBe('Rua Teste')
    expect(columns.at(1).text()).toBe('Apt 101')
    expect(columns.at(2).text()).toBe('Bairro Teste')
    expect(columns.at(3).text()).toBe('Cidade Teste')
    expect(columns.at(4).text()).toBe('UF')
    expect(columns.at(5).text()).toBe(moment().subtract(1, 'days').format('DD/MM/YYYY [às] HH:mm'))
    expect(columns.at(6).text()).toBe(moment().format('DD/MM/YYYY [às] HH:mm'))
  })
})
