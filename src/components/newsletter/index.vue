<template>
  <div class="container newsl_container">
    <h2>Join to our newsletter</h2>
    <div class="form">
      <input v-model="email" type="text"/>
      <button @click="submitHandler">Subscribe</button>
    </div>
    <div class="error_label">
      <div>
        {{ error }}
      </div>
    </div>
    <div class="success_label">
      <div>
        {{ success }}
      </div>
    </div>
    <div class="small">
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
    </div>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  data() {
    return {
      email: '',
      error: '',
      success: ''
    }
  },
  methods: {
    submitHandler() {
      let valid = this.validate(this.email);

      if(valid[0]) {
        this.error = '';
        this.addEmail(this.email);
      } else {
        this.error = valid[1];
      }
    },
    validate(email) {
      let valid = [true, ''];

      if(!/\S+@\S+\.\S+/.test(email)){
        valid = [false, 'enter valid email']
      }

      if(email === '') {
        valid = [false, 'empty email']
      }

      return valid;
    },
    addEmail(email) {
      this.$http.get(`users.json?orderBy=\"email\"&&equalTo=\"${email}\"`)
        .then(res => {
          if(Object.getOwnPropertyNames(res.data).length === 0) {
            this.$http.post('users.json', {email: this.email})
              .then(res => {
                this.success = 'Your email was added'
              })
          } else {
            this.success = 'Email is already in the list';
          }
        })
        this.clearSuccess();
    },
    clearSuccess() {
      setTimeout(() => {
        this.email = '';
        this.success = '';
        this.error = '';
      },2000)
    }
  }
}
</script>

