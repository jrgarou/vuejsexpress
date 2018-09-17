<template>
  <div class="register">
    <h1>{{msg}}</h1>
    <router-link to="/">Home</router-link>
    <br/>
    <input
      v-model="email"
      type="email"
      name="email"
      placeholder="email" />
    <input
      v-model="password"
      type="password"
      name="password"
      placeholder="password" />
    <br/>
    <button
      @click="register"
    >register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      msg: 'Register',
      email: 'jrgarou@gmail.com',
      password: 'A1a1a1a1'
    }
  },
  methods: {
    async register () {
      await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>
