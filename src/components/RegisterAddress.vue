<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <div class="d-flex justify-space-between align-center mb-4 topbar">
          <v-toolbar-title>{{ $t('registerAddress') }}</v-toolbar-title>
          <v-dialog v-model="dialog" max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
                large
              >
                {{ $t('new') }}
              </v-btn>
            </template>
            <AddressForm ref="addressForm" @save="handleSave" />
          </v-dialog>
        </div>
        <v-data-table
          :headers="headers"
          :items="formattedAddresses"
          class="elevation-1 mobile-row-spacing"
        >
          <template v-slot:item.actions="{ item, index }">
            <v-icon
              medium
              class="blue--text mx-2"
              @click="startEditAddress(item, index)"
            >
              mdi-pencil
            </v-icon>
            <v-icon
              medium
              class="red--text mx-2"
              @click="openDeleteDialog(index)"
            >
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
        <v-dialog v-model="deleteDialog" max-width="500px">
          <v-card>
            <v-card-title class="headline">Confirmação</v-card-title>
            <v-card-text>Tem certeza que deseja excluir este endereço?</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDeleteDialog">Cancelar</v-btn>
              <v-btn color="red darken-1" text @click="confirmDeleteAddressAction">Excluir</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AddressForm from './AddressForm.vue';
import moment from 'moment';

export default {
  data() {
    return {
      dialog: false,
      deleteDialog: false,
      deleteIndex: null,
      headers: [
        { text: 'Logradouro', value: 'logradouro', sortable: false },
        { text: 'Complemento', value: 'complemento', sortable: false },
        { text: 'Bairro', value: 'bairro', sortable: false },
        { text: 'Localidade', value: 'localidade', sortable: false },
        { text: 'UF', value: 'uf', sortable: false },
        { text: 'Data de Criação', value: 'createdAt', sortable: false },
        { text: 'Data de Atualização', value: 'updatedAt', sortable: false },
        { text: 'Ações', value: 'actions', sortable: false },
      ],
      editIndex: null,
    };
  },
  computed: {
    ...mapGetters('addresses', ['addresses']),
    formattedAddresses() {
      return this.addresses.map(address => ({
        ...address,
        createdAt: moment(address.createdAt).format('DD/MM/YYYY [às] HH:mm'),
        updatedAt: moment(address.updatedAt).format('DD/MM/YYYY [às] HH:mm'),
      }));
    },
  },
  methods: {
    ...mapActions('addresses', ['editAddress', 'deleteAddress', 'addAddress']),
    handleSave(address) {
      if (address) {
        if (this.$refs.addressForm.editMode) {
          this.editAddress({ cep: address.cep, index: this.editIndex });
        } else {
          this.addAddress(address);
        }
      }
      this.dialog = false;
    },
    startEditAddress(item, index) {
      this.dialog = true;
      this.editIndex = index;
      this.$nextTick(() => {
        this.$refs.addressForm.editAddress(item);
      });
    },
    openDeleteDialog(index) {
      this.deleteIndex = index;
      this.deleteDialog = true;
    },
    closeDeleteDialog() {
      this.deleteDialog = false;
    },
    confirmDeleteAddressAction() {
      this.deleteAddress(this.deleteIndex);
      this.deleteDialog = false;
    },
  },
  components: {
    AddressForm,
  },
};
</script>

<style>
.mobile-row-spacing .v-data-table__wrapper tr {
  padding: 8px 0; 
}

@media (max-width: 600px) {
  .mobile-row-spacing .v-data-table__wrapper tr {
    padding: 16px 0; 
  }
}

.text-center {
  text-align: center;
}

.topbar {
  padding: 16px; 
}
</style>
