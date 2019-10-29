<template>
    <v-container>
     <h1>Calculate</h1>
        <h2>
            {{ newQuestion.data.a }} x {{ newQuestion.data.b }}
        </h2>

        <v-form ref="answerBox"
                v-model="valid"
        >
            <v-text-field
                v-model.number="userAnswer"
                type="number"
                label="Answer"
                ref="inputBox"
                :rules="answerRules"
                required
                autofocus
            >
            </v-text-field>

            <v-btn
                :disabled="!valid"
                type="submit"
                color="success"
                class="mr-4"
                @click="submit(userAnswer)"
            >
                Submit
            </v-btn>
        </v-form>
        
    </v-container>
</template>

<script>
    export default {
        name: "Question",
        props: [
            'newQuestion',
        ],
        data: () => ({
            valid: true,
            userAnswer: "",
            answerRules: [
                v => Number.isInteger(v) || 'Your Answer must be an Integer.',
            ]
        }),
        methods: {
            submit(userAnswer) {
                    this.$emit('userResponse', userAnswer);
                    this.$refs.answerBox.reset();
                    this.$refs.inputBox.focus();
            }
        }
    }
</script>

<style scoped>

</style>