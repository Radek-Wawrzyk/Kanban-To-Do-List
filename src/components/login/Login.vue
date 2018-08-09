<template>
    <div class="container is-fluid">
      <div class="columns">
        <!-- Left Side -->
        <div class="left-side-bar has-text-centered column is-3 is-marginless">
          <div class="top">
            <span class="title is-1">Kanban</span>
          </div>  
          <div>
            <span class="tag is-danger">Comming Soon</span>
          </div>
          <img src="./web-design.png">
        </div>
        <!-- Right Side -->
        <form class="form right-side column is-3">
          <span class="subtitle is-4">Log in to Kanban</span>

          <div class="field">
            <label class="label" for="login">Login</label>
            <div class="control has-icons-left">
              <input class="input is-radiusless" type="text" id="login" name="login" placeholder="Login" v-model="user.name">
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
            </div>
          </div>

          <div class="field">
            <label class="label" for="password">Password</label>
            <div class="control has-icons-left">
              <span class="icon is-left">
                <i class="fas fa-lock"></i>
              </span>
              <input class="input is-radiusless" type="password" id="password" name="password" placeholder="Password" v-model="user.password">
              <a href="#" class="forgot-pass">Forgot password?</a>
            </div>
          </div>

          <div class="field">
            <button class="button is-primary" @click="submit">Login</button>
          </div>

          <div class="has-text-centered"><span>or</span> <p style="color: #7b68ee;"><a href="#">Sign Up</a></p></div>
        </form>
      </div>
    </div>
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

<style lang="scss" src="./login.scss" scoped />