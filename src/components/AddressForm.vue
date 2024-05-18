<template>
  <v-card>
    <v-card-text>
      <v-form>
        <v-text-field v-model="address.cep" label="CEP" required @blur="fetchAddress"></v-text-field>
        <v-text-field v-model="address.logradouro" label="Logradouro" required :disabled="editMode"></v-text-field>
        <v-text-field v-model="address.complemento" label="Complemento" :disabled="editMode"></v-text-field>
        <v-text-field v-model="address.bairro" label="Bairro" required :disabled="editMode"></v-text-field>
        <v-text-field v-model="address.localidade" label="Localidade" required :disabled="editMode"></v-text-field>
        <v-text-field v-model="address.uf" label="UF" required :disabled="editMode"></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="save(true)">{{ $t('save') }}</v-btn>
      <v-btn @click="save(false)">{{ $t('cancel') }}</v-btn>
    </v-card-actions>
  </v-card>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      editMode: false,
      address: {
        cep: '',
        logradouro: '',
        complemento: '',
        bairro: '',
        localidade: '',
        uf: '',
      },
    };
  },
  methods: {
    async fetchAddress() {
      if (this.address.cep) {
        try {
          const response = await axios.get(`/api/ws/${this.address.cep}/json/`);
          if (!response.data.erro) {
            this.address.logradouro = response.data.logradouro;
            this.address.complemento = response.data.complemento;
            this.address.bairro = response.data.bairro;
            this.address.localidade = response.data.localidade;
            this.address.uf = response.data.uf;
          } else {
            alert('CEP não encontrado!');
          }
        } catch (error) {
          console.error('Erro ao buscar o CEP:', error);
          alert('Erro ao buscar o CEP.');
        }
      }
    },
    save(isSaving) {
      if (isSaving) {
        this.$emit('save', { ...this.address });
      } else {
        this.resetForm();
        this.$emit('save');
      }
    },
    editAddress(address) {
      this.editMode = true;
      this.address = { ...address };
    },
    resetForm() {
      this.editMode = false;
      this.address = {
        cep: '',
        logradouro: '',
        complemento: '',
        bairro: '',
        localidade: '',
        uf: '',
      };
    },
  },
};
</script>


<style>
.v-card {
  padding: 20px;
}
</style>
