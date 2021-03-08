<template>
  <div class="home theme-colors">
    <Header></Header>
    <h1>Pagina de Test</h1>
    <form @submit.prevent="postSerial(serial)">
      <input type="message" v-model="serial.message">
      <button type="submit" class="btn btn-info">Validar</button>
    </form>
    <Footer></Footer>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      serial: {
        message: 'Serial'
      }
    }
  },
  methods: {
    ...mapActions(['postSerial'])
  }
};
</script>
<style scoped>

</style>