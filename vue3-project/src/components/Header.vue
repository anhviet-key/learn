<template>
  <div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <h1>Hello</h1>
    <button  @click="closes">Hide</button>
  </div>
</template>
<script>
  import HelloWorld from './HelloWorld.vue';
  export default {
    components: {
      HelloWorld,
    },
    methods: {
      closes() {
        this.$emit('cancel');
      },
    },
  };
</script>
<style lang=""></style>
