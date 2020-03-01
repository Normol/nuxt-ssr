<template>
  <div>
    {{ name }}
  </div>
</template>

<script>
export default {
  transition: "test",
  asyncData(context) {
    console.log("context", context);
    return {
      name: "测试asyncData"
    };
  },
  data() {
    return {
      name: "test"
    };
  }
};
</script>

<style scoped></style>
