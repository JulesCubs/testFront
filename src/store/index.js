import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    async postSerial(serial) {
      //console.log(serial)
      try {
        const res = await fetch('http://localhost:3000/serial', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(serial),
        })
        const answer = await res.json();
        console.log(answer);
      } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {}
});
