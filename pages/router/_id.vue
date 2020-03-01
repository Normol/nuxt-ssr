<template>
  <div>
    {{ id }}
  </div>
</template>

<script>
export default {
  transition: "test",
  // 路由参数校验
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  data() {
    return {
      rou: "dynamic route"
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  }
};
</script>

<style scoped></style>
