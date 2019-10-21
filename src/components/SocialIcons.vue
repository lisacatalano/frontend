<template>
  <div class="social">
    <div v-for="icon in icons" :key="icon.name">
      <a :href="icon.url" target="_blank">
        <div v-html="require(`!html-loader!../assets/images/icons/${icon.name}.svg`)"></div>
        <label>{{ icon.label }}</label>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SocialIcons',
  data() {
    return {
      icons: [
        {
          name: 'youtube',
          url: 'https://www.youtube.com/channel/UCubj5lDZugCZPKaLwcz4iOA',
          label: 'YouTube'
        },
        {
          name: 'codepen',
          url: 'https://codepen.io/lisa_c/',
          label: 'CodePen'
        },
        {
          name: 'github',
          url: 'https://github.com/lisacatalano',
          label: 'GitHub'
        },
        {
          name: 'linkedin',
          url: 'https://www.linkedin.com/in/lisa-catalano-53249a41/',
          label: 'LinkedIn'
        },
        {
          name: 'twitter',
          url: 'https://twitter.com/lcatdesigns',
          label: 'Twitter'
        }
      ]
    };
  }
};
</script>

<style scoped>
.social {
  display: flex;
  justify-content: flex-start;
  margin-top: 2em;
  align-self: center;
}
.social div {
  width: 40px;
  margin-right: 2em;
}
.social a {
  fill: white;
}
label {
  font-size: 0.75em;
}
@media screen and (max-width: 700px) {
  .social div {
    width: 35px;
    margin-right: 1.5em;
  }
}
@media screen and (max-width: 325px) {
  .social div {
    margin-right: 1em;
  }
  label {
    display: none;
  }
}
</style>
