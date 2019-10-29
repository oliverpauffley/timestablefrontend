<template>
  <div class="about">
    <v-container fluid>
      <v-row>
        <v-col><h1>Score: {{ score }}</h1></v-col>
        <v-col><h1>Timer: {{ countdown }}</h1></v-col>
      </v-row>

    <v-row>
      <v-col cols="8" align-self="center">
        <v-sheet>

        <Question v-if="newQuestion"
                  :newQuestion="newQuestion"
                  @userResponse="updateAnswer"
        >
        </Question>
        <h2 v-else>Loading...</h2>
        </v-sheet>
      </v-col>
    </v-row>
    </v-container>
  </div>
</template>

<script>
  import Question from '../components/Question'

  const axios = require('axios').default;


  export default {
    name: 'Quiz',
    components: {
      Question,
    },
    data: () => ({
      newQuestion: null,
      userAnswer: 0,
      currentAnswer: 0,
      score: 0,
      countdown: 120,
    }),
    methods: {

      updateAnswer(e) {
        this.userAnswer = e;
        this.currentAnswer = this.newQuestion.data.answer;
        if (this.userAnswer === this.currentAnswer) {
          this.score = this.score+ 1;
        }
          this.updateQuestion()
      },

      updateQuestion() {
    axios
            .get('http://127.0.0.1:8000/question')
            .catch(function(error){
              console.log(error)})
            .then(response => this.newQuestion = response)
      },

      countDownTimer() {
        if (this.countdown > 0) {
          setTimeout(() => {
            this.countdown -= 1;
            this.countDownTimer();
          }, 1000)}
          else {
          let score = this.score;
            this.$router.push({name: 'results', params: { score: score }})
          }
        }
    },
    mounted() {
      this.updateQuestion()
    },
    created() {
      this.countdown = 120;
      this.countDownTimer();
    },
  }
</script>