import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: "history",
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import("@/components/home/Home.vue"),
      children: [
        {
          path: "add-task",
          name: "AddTask",
          component: () => import("@/components/add task/addTask.vue")
        }
      ]
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/components/login/Login.vue")
    },

    {
      path: "/register",
      name: "Register",
      component: () => import("@/components/register/Register.vue")
    },
    
  ]
})
