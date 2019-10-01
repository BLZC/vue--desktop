import Vue from 'vue';
import vuex from 'vuex';

Vue.use(vuex);
export default new vuex.Store({
  state: {
    list: []
  },
  mutations: {
    addList (state, value) {
      state.list.push(value);
    }
  }
});
