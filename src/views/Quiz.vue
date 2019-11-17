<template>
    <div class="about">
        <v-container v-if="go" fluid>
            <v-row justify="center">
                <v-col cols="3"><h1>Score: {{ score }}</h1></v-col>
                <v-col cols="2"></v-col>
                <v-col cols="3"><h1>Timer: {{ countdown }}</h1></v-col>
            </v-row>

            <v-row>
                <v-col>
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
        <v-container fluid v-else>
            <v-spacer></v-spacer>
            <p class="display-4"> Starting in:</p>
            <p class="display-4 text-center align-center">{{ launch }}</p>
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
            score: 0,
            scoreBuffer: 0,
            launch: 5,
            go: false,
            countdown: 120,
            currentQuestionStarted: 120,
            answers: [],
        }),
        methods: {

            updateAnswer(e) {
                let time = this.currentQuestionStarted - this.countdown;
                let correct = Number(this.newQuestion.data.answer) === Number(e);
                if (correct) {
                    let questionPoints = Math.round(1 / (time + 0.5) + 10 * Math.exp(-0.1 * time));
                    this.scoreBuffer += questionPoints;
                    this.score = this.score + questionPoints;
                }
                let question = {
                    a: this.newQuestion.data.a,
                    b: this.newQuestion.data.b,
                    correct: correct,
                    time: time
                };
                this.answers.push(question);
                this.updateQuestion();
                this.currentQuestionStarted = this.countdown;
            },

            updateQuestion() {
                axios
                    .get('http://127.0.0.1:8000/question')
                    .catch(function (error) {
                        console.log(error)
                    })
                    .then(response => this.newQuestion = response)
            },

            countDownTimer() {
                if (this.countdown > 0) {
                    setTimeout(() => {
                        this.countdown -= 1;
                        this.countDownTimer();
                    }, 1000)
                } else {
                    this.$router.push({name: 'results', params: {score: this.score, answers: this.answers}})
                }
            },
            launchTimer() {
                if (this.launch > 0) {
                    setTimeout(() => {
                        this.launch -= 1;
                        this.launchTimer();
                    }, 1000)
                } else {
                    this.go = true;
                    this.countDownTimer()
                }
            }
        },
        mounted() {
            this.updateQuestion()
        },
        created() {
            this.answers = [];
            this.countdown = 120;
            this.launchTimer();
        },
    }
</script>