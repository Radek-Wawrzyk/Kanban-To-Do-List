<template>
  <div class="hello">
    <Navigation></Navigation>
    <Panel></Panel>
  </div>
</template>

<script>

import axios from "axios"
import Navigation from "./navigation/Navigation.vue"
import Panel from "./panel/Panel.vue"

export default {
  name: 'Home',
  components: {
    Navigation,
    Panel
  },
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
