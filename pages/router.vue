<template>
  <nuxt-child class="router-child" />
</template>

<script>
export default {
  transition: "test",
  middleware: "auth",
  layout: "top",
  data() {
    return {
      key: "1"
    };
  }
};
</script>
<style scoped></style>
