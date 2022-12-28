<template lang="">
  <div>
    <HeaderVue v-if="isShow" @cancel="toggleCLE" />
    <button v-if="!isShow" @click="toggleCLE">Show</button>
  </div>
</template>
<script>
  import HeaderVue from './components/Header.vue';
  export default {
    name: 'App',
    data() {
      return {
        isShow: false,
      };
    },
    methods: {
      toggleCLE() {
        this.isShow = !this.isShow;
      },
    },
    components: {
      HeaderVue,
    },
  };
</script>
<style></style>
