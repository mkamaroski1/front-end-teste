<template>
  <v-app>
    <TopBar @toggle-drawer="drawer = !drawer" />
    <NavigationDrawer v-model="drawer" />
    <v-container fluid class="mt-10">
      <v-row>
        <v-col cols="12">
          <router-view />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import TopBar from './components/TopBar.vue';
import NavigationDrawer from './components/NavigationDrawer.vue';

export default {
  components: {
    TopBar,
    NavigationDrawer,
  },
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style>
.mt-5 {
  margin-top: 20px;
}
</style>