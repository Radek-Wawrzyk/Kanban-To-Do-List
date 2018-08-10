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
          <div class="subtitle-text-left">
            <span>Connect on all devices and create simple lists with your friends!</span>
          </div>
          <img src="./web-design.png">
          <div class="bottom">
            <div class="bottom-line"></div>
            <div class="columns">
              <div class="column social is-desktop-12 is-mobile-12"><i class="fab fa-github"></i> <span class="social-text"><a href="#">GitHub</a></span></div>
            </div>
          </div>
        </div>
        <!-- Right Side -->
        <form class="form right-side column is-3">
          <span class="subtitle is-4">SignUp in to Kanban</span>

          <div class="field">
            <label class="label" for="login">Login</label>
            <div class="control has-icons-left">
              <input class="input is-radiusless" type="text" id="login" name="login" placeholder="Login" v-model="user.name" required>
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
            </div>
          </div>

          <div class="field">
            <label class="label" for="login">Mail</label>
            <div class="control has-icons-left">
              <input class="input is-radiusless" type="email" id="email" name="email" placeholder="sample卐@hitler.xd" required>
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
              <input class="input is-radiusless" type="password" id="password" name="password" placeholder="Password" v-model="user.password" required>
            </div>
          </div>

          <div class="field">
            <label class="label" for="password">Retype password again</label>
            <div class="control has-icons-left">
              <span class="icon is-left">
                <i class="fas fa-lock"></i>
              </span>
              <input class="input is-radiusless" type="password" id="repassword" name="repassword" placeholder="Retype password" required>
            </div>
          </div>

          <div class="field">
            <button class="button is-primary" @click="submit">SignUp</button>
          </div>

          <div class="has-text-centered"><span>or</span> <p style="color: #7b68ee;"><a href="#">Log In</a></p></div>
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

<style lang="scss" src="../login/login.scss" scoped />