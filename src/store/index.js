import Vue from 'vue';
import Vuex from 'vuex';
import addresses from './modules/addresses';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    addresses,
  },
  plugins: [createPersistedState()],
});
