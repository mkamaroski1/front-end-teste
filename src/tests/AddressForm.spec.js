import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import VueI18n from 'vue-i18n'
import axios from 'axios'
import flushPromises from 'flush-promises'
import AddressForm from '@/components/AddressForm.vue'

jest.mock('axios')

const localVue = createLocalVue()
localVue.use(Vuetify)
localVue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en',
  messages: {
    en: {
      save: 'Save',
      cancel: 'Cancel',
      new: 'New'
    }
  }
})

describe('AddressForm.vue', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('renders the form fields correctly', () => {
    const wrapper = mount(AddressForm, { localVue, vuetify, i18n })

    const textFields = wrapper.findAllComponents({ name: 'v-text-field' })
    expect(textFields.length).toBe(6)
  })

  it('fetches address when CEP field is blurred', async () => {
    axios.get.mockResolvedValue({
      data: {
        logradouro: 'Rua Teste',
        complemento: 'Apt 101',
        bairro: 'Bairro Teste',
        localidade: 'Cidade Teste',
        uf: 'UF'
      }
    })

    const wrapper = mount(AddressForm, { localVue, vuetify, i18n })
    const cepField = wrapper.findAllComponents({ name: 'v-text-field' }).at(0).find('input')
    await cepField.setValue('12345678')
    await cepField.trigger('blur')

    await flushPromises()

    expect(wrapper.vm.address.logradouro).toBe('Rua Teste')
    expect(wrapper.vm.address.complemento).toBe('Apt 101')
    expect(wrapper.vm.address.bairro).toBe('Bairro Teste')
    expect(wrapper.vm.address.localidade).toBe('Cidade Teste')
    expect(wrapper.vm.address.uf).toBe('UF')
  })

  it('displays an error if CEP is not found', async () => {
    axios.get.mockResolvedValue({
      data: { erro: true }
    })

    const wrapper = mount(AddressForm, { localVue, vuetify, i18n })
    const cepField = wrapper.findAllComponents({ name: 'v-text-field' }).at(0).find('input')
    await cepField.setValue('12345678')
    await cepField.trigger('blur')

    await flushPromises()

    expect(wrapper.vm.error).toBe('CEP não encontrado!')
  })

  it('emits save event with address data when save button is clicked', async () => {
    const wrapper = mount(AddressForm, { localVue, vuetify, i18n })
    wrapper.setData({
      address: {
        cep: '12345678',
        logradouro: 'Rua Teste',
        complemento: 'Apt 101',
        bairro: 'Bairro Teste',
        localidade: 'Cidade Teste',
        uf: 'UF'
      }
    })

    await wrapper.find('.v-btn').trigger('click')

    expect(wrapper.emitted().save[0]).toEqual([{
      cep: '12345678',
      logradouro: 'Rua Teste',
      complemento: 'Apt 101',
      bairro: 'Bairro Teste',
      localidade: 'Cidade Teste',
      uf: 'UF'
    }])
  })

  it('resets the form when cancel button is clicked', async () => {
    const wrapper = mount(AddressForm, { localVue, vuetify, i18n })
    wrapper.setData({
      address: {
        cep: '12345678',
        logradouro: 'Rua Teste',
        complemento: 'Apt 101',
        bairro: 'Bairro Teste',
        localidade: 'Cidade Teste',
        uf: 'UF'
      }
    })

    await wrapper.findAll('.v-btn').at(1).trigger('click')

    expect(wrapper.vm.address.cep).toBe('')
    expect(wrapper.vm.address.logradouro).toBe('')
    expect(wrapper.vm.address.complemento).toBe('')
    expect(wrapper.vm.address.bairro).toBe('')
    expect(wrapper.vm.address.localidade).toBe('')
    expect(wrapper.vm.address.uf).toBe('')
  })
})
