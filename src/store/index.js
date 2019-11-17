import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const axios = require('axios').default;

export default new Vuex.Store({
  state: {
    leaderBoard: []
  },
  getters: {
    fullLeaderBoard: state => {
      return state.leaderBoard
    }
  },
  mutations: {
    UPDATE_LEADERBOARD(state, newLeaderBoard) {
      state.leaderBoard = newLeaderBoard
    }
  },
  actions: {
    requestLeaderBoard ({commit}) {
     axios
         .get('http://127.0.0.1:8000/leaderboard')
         .then(r => r.data)
         .then(leaderBoard => {
         commit('UPDATE_LEADERBOARD', leaderBoard)})
    }
  },
  modules: {
  }
})
