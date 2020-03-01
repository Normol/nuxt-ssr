<template>
  <div class="container">
    <div v-if="show">
      main
    </div>
    <button @click="_onChagne">测试store</button>
    <div class="router column">
      <nuxt-link to="/router">router</nuxt-link>
      <nuxt-link to="/router/2">dynamic router</nuxt-link>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("main");
export default {
  transition: "test",
  layout: "top",
  components: {
    Logo
  },
  //填充状态树
  fectch() {},
  computed: {
    ...mapState(["show"])
  },
  mounted() {
    console.log("output");
  },
  methods: {
    ...mapActions(["changeStatus"]),
    _onChagne() {
      this.changeStatus();
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.column {
  display: flex;
  flex-direction: column;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
