import createPersistedState from 'vuex-persistedstate';

import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';
import projects from './projects'
import tasks from './tasks'

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    baseURL: 'https://noteit-api-adonis.herokuapp.com/api/v1'
  },
  modules: {
    auth,
    projects,
    tasks,
  },
  mutations: {

  },
  actions: {

  },
  plugins: [
    createPersistedState(),
  ],
});