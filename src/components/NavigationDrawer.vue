<template>
  <v-navigation-drawer v-model="drawer" app clipped temporary>
    <v-list>
      <v-subheader class="grey--text">Menu</v-subheader>
      <v-list-item link :to="{ name: 'home' }" class="list-item">
        <v-list-item-icon>
          <v-icon class="black--text">mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="black--text">{{ $t('home') }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link :to="{ name: 'register' }" class="list-item">
        <v-list-item-icon>
          <v-icon class="black--text">mdi-account-plus</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="black--text">{{ $t('registerAddress') }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    drawer: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
};
</script>

<style>
.list-item {
  color: white !important;
}

.list-item:hover {
  background-color: rgba(0, 0, 0, 0.1) !important;
}

.white--text {
  color: white !important;
}

.v-list-item--active .white--text {
  color: rgba(0, 0, 0, 0.6) !important;
}
</style>
