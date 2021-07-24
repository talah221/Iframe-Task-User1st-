import { createStore } from "vuex";
const mainStore = {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {},
  getters: {},
};

export default createStore({
  modules: {
    main: mainStore,
  },
});
