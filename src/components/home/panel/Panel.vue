<template>
  <main>
    <div class="container">
      <section class="section">
        <h2 class="title is-2">Tasks</h2>
        <div class="columns panel-columns">
          <div class="column is-6">
            <div class="panel">
              <header class="panel-header">
                <h3 class="subtitle is-5">Open</h3>
                <span class="panel-header-counter">{{openTasks.length}}</span>
              </header>
              <div class="panel-add-task" v-if="openTasks.length <= 0"> 
                <p class="panel-add-task-text">You don't have any tasks...</p> 
                <router-link to="add-task" class="button is-primary"> 
                  New Task 
                </router-link> 
              </div> 
              <ul class="panel-items" >
                <Task v-for="(task, index) in tasks" :key="index" :task="task" v-if="!task.done"></Task>
              </ul>
            </div>
          </div>
          <div class="column is-6" >
            <div class="panel">
              <header class="panel-header done">
                <h3 class="subtitle is-5">Done </h3>
                <span class="panel-header-counter">{{doneTasks.length}}</span>
              </header>
              <ul class="panel-items">
                <Task v-for="(task, index) in tasks" :key="index" :task="task" v-if="task.done"></Task>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
    <router-view></router-view>
  </main>
</template>

<script>

import AddTask from "@/components/add task/addTask.vue"
import Task from "@/components/home/panel/task/Task.vue"
import { mapGetters } from 'vuex'

export default {
  name: 'Panel',
  components: {
    AddTask,
    Task
  },
  computed: {
    ...mapGetters([
      "tasks",
      "doneTasks",
      "openTasks"
    ])
  }
}

</script>

<style lang="scss" src="./panel.scss" scoped />
