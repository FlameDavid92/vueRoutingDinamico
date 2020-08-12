import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import CategoryView from './views/CategoryView.vue';
import PostView from './views/PostView.vue';
import NotFound from './views/NotFound.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/404',
      name: 'notfound',
      component: NotFound
    },
    {
      path: '/blog/:key',
      name: 'category',
      component: CategoryView,
      children: [
        {
          path: ':keypost',
          name: 'post',
          component: PostView
        }
      ]
    }
  ]
})
