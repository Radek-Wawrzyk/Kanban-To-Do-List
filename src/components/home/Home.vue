<template>
  <div class="hello">
    <h1 class="title is-1">{{ msg }}</h1>
  </div>
</template>

<script>

import axios from "axios"

export default {
  name: 'Home',
  data() {
    return {
      msg: "Kanban Todolist"
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
