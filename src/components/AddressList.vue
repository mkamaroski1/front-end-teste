<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-data-table :headers="headers" :items="formattedAddresses" class="elevation-1 mobile-row-spacing">
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>{{ $t('recentAddresses') }}</v-toolbar-title>
            </v-toolbar>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import moment from 'moment';

export default {
  computed: {
    ...mapGetters('addresses', ['recentAddresses']),
    formattedAddresses() {
      return this.recentAddresses.map(address => ({
        ...address,
        createdAt: moment(address.createdAt).format('DD/MM/YYYY [às] HH:mm'),
        updatedAt: moment(address.updatedAt).format('DD/MM/YYYY [às] HH:mm'),
      }));
    },
  },
  data() {
    return {
      headers: [
        { text: 'Logradouro', value: 'logradouro', sortable: false },
        { text: 'Complemento', value: 'complemento', sortable: false },
        { text: 'Bairro', value: 'bairro', sortable: false },
        { text: 'Localidade', value: 'localidade', sortable: false },
        { text: 'UF', value: 'uf', sortable: false },
        { text: 'Data de Criação', value: 'createdAt', sortable: false },
        { text: 'Data de Atualização', value: 'updatedAt', sortable: false },
      ],
    };
  },
};
</script>

<style>
.v-data-table {
  margin-top: 20px;
}
.v-data-table td {
  font-size: 0.875rem;
  color: #424242;
}
.v-data-table th {
  font-weight: bold;
  font-size: 0.9rem;
}


</style>
