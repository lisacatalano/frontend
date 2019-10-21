<template>
  <div class="home">
    <div class="asterisk" v-html="require(`!html-loader!../assets/images/asterisk.svg`)"></div>
    <ul class="headline">
      <li class="word1">Design</li>
      <li class="word2">Develop</li>
      <li class="word3">Teach</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',

  created() {
    // for removing scrollbars which are from animating asterisk going off screen
    document.querySelector('body').classList.add('homepage');
  }
};
</script>
