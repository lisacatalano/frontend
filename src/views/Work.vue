<template>
  <div class="work">
    <div class="content">
      <p>
        I am available for Contract work now. If you are interested, please&nbsp;
        <router-link class="link" @click.native="sendChange" to="/contact">contact me</router-link>.
      </p>
      <p>
        You can see some examples of my work through the links below. Some of
        this work is becoming dated but I'm working on improving that now.
      </p>
      <p>
        The
        <a target="blank" class="link" href="https://css-snippets.com">CSS Snippets</a> website
        was started while in Graphic Design school as a simple way to help fellow designers use
        some of the "new" CSS3 techniques. Those techniques are not new anymore but I am
        starting to post there again with different topics that are interesting to me.
      </p>
    </div>

    <SocialIcons />
  </div>
</template>

<script>
import SocialIcons from '@/components/SocialIcons.vue';
import EventBus from '../eventBus';

export default {
  components: {
    SocialIcons
  },
  methods: {
    sendChange() {
      EventBus.$emit('changePage');
    }
  }
};
</script>
