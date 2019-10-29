<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <v-spacer></v-spacer>
    Welcome to The TimesTables App
    <v-spacer></v-spacer>
    click here for a new question <router-link to="Quiz">Question</router-link>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  }
}
</script>
