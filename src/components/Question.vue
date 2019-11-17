<template>
    <v-container>
        <v-row>
            <v-col>
                <p class="display-4 text-center">
                    {{ newQuestion.data.a }} x {{ newQuestion.data.b }}
                </p>
            </v-col>
        </v-row>
        <v-form ref="answerBox"
                v-model="valid"
        >
            <v-container>
                <v-row justify="space-around">
                    <v-col cols="4"></v-col>
                    <v-col cols="4">
                        <v-text-field
                                v-model.number="userAnswer"
                                type="number"
                                label="Answer"
                                ref="inputBox"
                                :rules="answerRules"
                                required
                                autofocus>
                        </v-text-field>
                    </v-col>
                    <v-col cols="4"></v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-btn
                                :disabled="!valid"
                                type="submit"
                                color="success"
                                class="mr-4"
                                @click="submit(userAnswer)">
                            Submit
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
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