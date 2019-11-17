<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        TimesTable Quiz
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/quiz">New Quiz</v-btn>
        <v-btn text to="/leaderboard">Leaderboard</v-btn>
      </v-toolbar-items>

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
