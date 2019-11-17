<template>
    <div>
        <div v-if="!loading">
            <v-data-table
                    :headers="headers"
                    :items="leaderBoard.users"
                    :items-per-page="15"
                    :server-items-length="leaderBoard.count"
                    class="elevation-1"
            ></v-data-table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Leaderboard",
        data: () => ({
            loading: false,
            headers: [
                {
                  text: 'Rank',
                  value: 'Rank'
                },
                {
                    text: 'Name',
                    sortable: false,
                    value: 'ID',
                },
                { text: 'Score', value: 'Score'},
            ],
        }),
        computed: {
            leaderBoard() {
                return this.$store.getters.fullLeaderBoard
            }
        },
        methods: {
            fetchLeaderboard() {
                this.loading = true;
                    this.$store.dispatch('requestLeaderBoard')
                        .then(() => {
                            this.loading = false});
            }
        },
        created() {
            this.fetchLeaderboard()
        }
    }
</script>

<style scoped>

</style>
