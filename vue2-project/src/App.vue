<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->

    <!-- <button @click="isShow = !isShow">
      <span v-if="!isShow">SHOW</span>
      <span v-else>HIDDEN</span>
    </button>
    <input type="text" v-model="chanel.name" />
    <button @click="chanel.name = 'AVC'">Click</button> -->
    <input type="text" v-model="text" /><button
      @click="todos.push({ content: text, done: false })">
      Add
    </button>
    {{ todos }}

    <!-- <div v-for="(todo, index) in todos" :key="index">
      <input type="checkbox" v-model="todo.done" /><span
        :class="{ done: todo.done }"
        >{{ todo.content }}</span
      >
    </div> -->
    <div>
      <Menu v-for="(item, index) in todos" :key="index" :baby="item" />
    </div>
  </div>
</template>

<script>
  import Menu from './components/Menu.vue';
  export default {
    name: 'App',
    data() {
      return {
        text: '',
        isShow: true,
        chanel: {
          name: 'Nguyen Anh Viet',
        },
        todos: [{ content: 'nono', done: true }],
      };
    },
    components: {
      Menu,
    },
  };
</script>

<style>
  .done {
    text-decoration: line-through;
    color: rgb(123, 121, 121);
    -moz-transition: all 1s;
  }
</style>
