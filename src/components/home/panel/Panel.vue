<template>
  <main>
    <div class="container">
      <section class="section">
        <h2 class="title is-2">Tasks</h2>
        <div class="columns">
          <div class="column is-6">
            <div class="panel">
              <header class="panel-header">
                <h3 class="subtitle is-5">Open</h3>
                <span class="panel-header-counter">2</span>
              </header>
              <ul class="panel-items">
                <li class="item" v-for="task in tasks" :key="task.id" v-if="!task.done">
                  <a href="#" >
                    <h4 class="subtitle is-5">{{task.title}}</h4>
                    <p class="item-description">{{task.description}}</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="column is-6">
            <div class="panel">
              <header class="panel-header done">
                <h3 class="subtitle is-5">Done</h3>
                <span class="panel-header-counter">1</span>
              </header>
              <ul class="panel-items">
                <li class="item" v-for="task in tasks" :key="task.id" v-if="task.done">
                  <a href="#" >
                    <h4 class="subtitle is-5">{{task.title}}</h4>
                    <p class="item-description">{{task.description}}</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>

export default {
  name: 'Panel',
  data() {
    return {
      tasks: [
        {
          id: 0,
          title: "Eat healthy food",
          description: "Eat fucking food, cause food is very importantin your life, have a nice diet and what is more importantdo not eat junk food, fast food is good enought, however burgers from MC are fucking unhealthy.",
          date: "08-08-2018",
          done: false
        },
        {
          id: 1,
          title: "Eat healthy food",
          description: "Eat fucking food, cause food is very importantin your life, have a nice diet and what is more importantdo not eat junk food, fast food is good enought, however burgers from MC are fucking unhealthy.",
          date: "08-08-2018",
          done: false
        },
        {
          id: 2,
          title: "Eat healthy food",
          description: "Eat fucking food, cause food is very importantin your life, have a nice diet and what is more importantdo not eat junk food, fast food is good enought, however burgers from MC are fucking unhealthy.",
          date: "08-08-2018",
          done: true
        }
      ]
    }
  }
}

</script>

<style lang="scss" src="./panel.scss" scoped />
