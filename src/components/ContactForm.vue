<template>
  <form v-if="!submitted" class="form" @submit.prevent="submit" novalidate>
    <div v-if="errors.length" class="error-message">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
    </div>

    <div class="field">
      <label class="label" for="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        v-model="name.value"
        required
        :class="{ error: !name.valid }"
        @input="name.valid=true"
      />
    </div>
    <div class="field">
      <label class="label" for="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        v-model="email.value"
        required
        :class="{ error: !email.valid }"
        @input="email.valid=true"
      />
    </div>

    <div class="field">
      <label class="label" for="textarea">Message</label>
      <textarea
        class="message"
        name="textarea"
        id="textarea"
        rows="7"
        v-model="message.value"
        required
        :class="{ error: !message.valid }"
        @input="message.valid=true"
      ></textarea>
    </div>
    <div>
      <input class="submit" type="submit" value="Submit" />
    </div>
  </form>
  <div v-else>
    <p>{{ sendMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      errors: [],
      name: {
        value: '',
        valid: true
      },
      email: {
        value: '',
        valid: true
      },
      message: {
        value: '',
        valid: true
      },
      submitted: false,
      sendMessage: 'Your message has been sent.'
    };
  },

  methods: {
    submit() {
      this.validate();
      if (this.errors.length == 0) {
        this.submitted = true;
        this.sendMessage = 'Sending Email';

        axios
          .post('api/email', {
            name: this.name.value,
            email: this.email.value,
            message: this.message.value
          })
          .then(response => {
            this.sendMessage = 'Your message has been sent.';
          })
          .catch(response => {
            this.sendMessage =
              'Sorry, there was a problem sending your email. Please try again later.';
            console.error('Email failure!', response);
          });
      }
    },

    validate: function() {
      this.errors = [];
      if (!this.name.value) {
        this.errors.push('Please enter a name');
        this.name.valid = false;
      }
      if (this.message.value.trim().length < 1) {
        this.errors.push('Please enter a message');
        this.message.valid = false;
      }
      if (!this.isEmail(this.email.value)) {
        this.errors.push('Please enter a valid email address');
        this.email.valid = false;
      }
    },

    isEmail: function(value) {
      // eslint-disable-next-line
      const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      return emailRegExp.test(value);
    }
  }
};
</script>

