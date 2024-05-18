import { fetchAddressByCep } from '@/api/viacep';

export const actions = {
  async addAddress({ commit, dispatch }, address) {
    try {
      const response = await fetchAddressByCep(address.cep);
      const newAddress = { 
        ...response, 
        ...address, 
        createdAt: new Date().toISOString(), 
        updatedAt: new Date().toISOString() 
      };
      commit('ADD_ADDRESS', newAddress);
    } catch (error) {
      dispatch('showError', 'Erro ao adicionar endereço.');
    }
  },
  async editAddress({ commit, state, dispatch }, { cep, index }) {
    try {
      const response = await fetchAddressByCep(cep);
      const existingAddress = state.addresses[index];
      const updatedAddress = { 
        ...existingAddress, 
        ...response, 
        cep, 
        updatedAt: new Date().toISOString() 
      };
      commit('EDIT_ADDRESS', { index, address: updatedAddress });
    } catch (error) {
      dispatch('showError', 'Erro ao editar endereço.');
    }
  },
  deleteAddress({ commit }, index) {
    commit('DELETE_ADDRESS', index);
  },
  showError({ commit }, message) {
    commit('SET_ERROR', message);
  },
};
