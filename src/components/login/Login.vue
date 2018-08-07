<template>
  <section class="section">
    <form class="form">
      <div class="field">
        <label class="label" for="login">Login</label>
        <div class="control">
          <input class="input" type="text" id="login" name="login" placeholder="Login" v-model="user.name">
        </div>
      </div>
      <div class="field">
        <label class="label" for="password">Password</label>
        <div class="control">
          <input class="input" type="password" id="password" name="password" placeholder="Password" v-model="user.password">
        </div>
      </div>
      <div class="field">
        <button class="button is-primary" @click="submit">Login</button>
      </div>
    </form>
  </section>
</template>

<script>

import axios from "axios"

export default {
  name: "Login",
  data() {
    return {
      user: {
        name: "",
        password: ""
      }
    }
  },
  methods: {
    submit() {
      console.log(this.user);
    }
  }
}

</script>
