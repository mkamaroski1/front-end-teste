export const mutations = {
  ADD_ADDRESS(state, address) {
    state.addresses.push(address);
  },
  EDIT_ADDRESS(state, { index, address }) {
    state.addresses.splice(index, 1, address);
  },
  DELETE_ADDRESS(state, index) {
    state.addresses.splice(index, 1);
  },
  SET_ERROR(state, message) {
    state.errorMessage = message;
    state.errorSnackbar = true;
  },
  CLEAR_ERROR(state) {
    state.errorMessage = '';
    state.errorSnackbar = false;
  },
};
