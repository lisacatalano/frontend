<template>
  <div class="wrapper" :style="bgcolor">
    <header>
      <router-link @click.native="changeColor" to="/" exact class="branding">
        <img class="logo" src="./assets/images/lisa_logo.svg" alt="Logo" />
      </router-link>
      <div id="nav" class="navigation">
        <router-link @click.native="changeColor" to="/about">About</router-link>
        <router-link @click.native="changeColor" to="/contact">Contact</router-link>
        <router-link @click.native="changeColor" to="/work">Work</router-link>
        <a href="http://css-snippets.com/" target="_blank" class="external">CSS Snippets</a>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script>
import EventBus from './eventBus';

export default {
  data() {
    return {
      currentColor: 'teal',
      colors: ['teal', 'red', 'purple', 'orange', 'green']
    };
  },
  computed: {
    bgcolor() {
      return {
        backgroundColor: `var(--${this.currentColor})`
      };
    }
  },
  methods: {
    changeColor() {
      let next = this.colors.indexOf(this.currentColor) + 1;
      if (next === this.colors.length) {
        next = 0;
      }
      this.currentColor = this.colors[next];
    }
  },
  created() {
    EventBus.$on('changePage', this.changeColor);
  }
};
</script>

<style lang="scss">
@import './assets/scss/app.scss';
</style>
