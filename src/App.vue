<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span><router-link to="/">TimesTable Quiz</router-link></span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <v-container fluid align-self="center">
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>

export default {
  name: 'App',
  components: {
  },
  data: () => ({
    //
  }),
};
</script>
