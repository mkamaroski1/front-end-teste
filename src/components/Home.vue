<template>
  <v-container fluid>
    <AddressList />
  </v-container>
</template>

<script>
import AddressList from './AddressList.vue';

export default {
  components: {
    AddressList,
  },
};
</script>

<style>
.v-container {
  padding-top: 20px;
}
</style>
