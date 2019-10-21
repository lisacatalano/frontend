<template>
  <div class="contact">
    <h1>Contact Lisa</h1>
    <ContactForm />

    <SocialIcons />
  </div>
</template>
<script>
import SocialIcons from '@/components/SocialIcons.vue';
import ContactForm from '@/components/ContactForm.vue';

export default {
  components: {
    SocialIcons,
    ContactForm
  }
};
</script>
