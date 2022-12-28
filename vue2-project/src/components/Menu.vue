<template>
  <div>
    <h1>Hello</h1>
    <input
      type="checkbox"
      v-model="baby.done"
      v-bind="x"
      @click="baby.done = !baby.done" /><span>{{ baby.content }}</span>
    <span>
      {{ baby.done }}
    </span>
  </div>
</template>
<script>
  export default {
    props: {
      baby: Object,
    },
    data() {
      return {};
    },
  };
</script>
<style scoped></style>
