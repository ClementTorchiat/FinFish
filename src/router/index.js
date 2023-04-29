import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Story from '../views/Story.vue';
import Offf from '../views/Offf.vue';
import Homefr from '../views/fr/Homefr.vue';
import Storyfr from '../views/fr/Storyfr.vue';
import Offffr from '../views/fr/Offffr.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/story',
      name: 'story',
      component: Story
    },
    {
      path: '/offf',
      name: 'offf',
      component: Offf
    },
    {
      path: '/fr',
      name: 'homefr',
      component: Homefr
    },
    {
      path: '/fr/story',
      name: 'storyfr',
      component: Storyfr
    },
    {
      path: '/fr/offf',
      name: 'offffr',
      component: Offffr
    }
  ]
})

export default router
