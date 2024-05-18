import { actions } from '../actions';
import { mutations } from '../mutations';

const state = {
  addresses: [], 
};

const getters = {
  addresses: (state) => state.addresses,
  recentAddresses: (state) => state.addresses.slice(0, 3),  
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
