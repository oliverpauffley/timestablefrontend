<template>
  <div class="home">
    <p class="display-3 text-center"> Welcome to The TimesTables Quiz </p>
    <v-spacer></v-spacer>
    <p class="body-1 text-center"> You will have 2 minutes to answer as many timestables as you can. The quicker you answer,
    the more points you will receive. Good Luck</p>
    <v-row align="center">
      <v-col class="text-center">
    <v-btn to="/quiz" x-large> Start </v-btn>
        </v-col>
      </v-row>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
  }
}
</script>
