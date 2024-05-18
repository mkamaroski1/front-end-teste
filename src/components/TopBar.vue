<template>
  <v-app-bar app color="primary" dark>
    <v-app-bar-nav-icon @click="$emit('toggle-drawer')" />
    <v-toolbar-title>{{ $t('appName') }}</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: 'TopBar',
};
</script>