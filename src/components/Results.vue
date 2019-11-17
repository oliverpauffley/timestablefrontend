<template>
    <div>
        <h2> Your Score was {{ $route.params.score }} points</h2>
        <h2> You attempted {{ answers.length }} questions and got {{ numberCorrect }} correct</h2>
        <h2> The average time to answer each question was {{ averageTime }} seconds</h2>
        <h2> The question that took you longest to answer was {{ longestQuestion }}</h2>

        <v-form
            ref="nameEntry"
            v-model="valid"
            >
            <v-label>Enter your name to see where you are on the leaderboards!</v-label>
            <v-text-field
                    v-model="name"
                    :counter="10"
                    :rules="nameRules"
                    label="Name"
                    required
            ></v-text-field>

            <v-btn
                :disabled="!valid"
                color="success"
                @click="postScore">
                Submit
            </v-btn>
        </v-form>
    </div>
</template>

<script>
    const axios = require('axios').default;

    export default {
        name: "Results",
        data: () => ({
            answers: [],
            valid: true,
            name: "",
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters'
            ],
            leaderBoard: []
        }),
        computed: {
            averageTime: function(){
              let sum = 0;
              for (const question of this.answers) {
                  sum = sum + question.time
              }
              let answer = sum / this.answers.length;
              return  answer.toFixed(2)
          },
            longestQuestion: function(){
                let longest = 0;
                let longQuestion = "";
                for (const question of this.answers){
                    if (question.time > longest) {
                        longest = question.time;
                        longQuestion = question.a.toString() + ' x ' + question.b.toString()
                }
            }
            return longQuestion
          },
            numberCorrect: function(){
              let correctCount = 0;
              for (const question of this.answers){
                  if (question.correct) {
                      correctCount += 1;
                  }
              }
              return correctCount
            }
        },
        created() {
            this.getAnswers()
        },
        methods: {
            postScore() {
                if (this.$refs.nameEntry.validate){
                    let data = {
                        name: this.name,
                        score: this.$route.params.score,
                        answers: this.answers
                    };
                axios
                    .post('http://127.0.0.1:8000/results', data)
                    .catch(function (error) {
                        console.log(error)
                    })
                }
                // TODO -send request for leaderboard and add to vuex
                this.$router.push({name:'leaderboard'})
            },
            getAnswers(){
                if (this.$route.params.answers){
                this.answers = this.$route.params.answers}
                else {
                    this.$router.push('/')}
            }
        }
    }
</script>

<style scoped>

</style>