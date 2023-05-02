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
      component: Home,
      meta: {
        title : 'Home - FinFish'
      }
    },
    {
      path: '/story',
      name: 'story',
      component: Story,
      meta: {
        title : 'Story - FinFish'
      }
    },
    {
      path: '/offf',
      name: 'offf',
      component: Offf,
      meta: {
        title : 'OFFF - FinFish'
      }
    },
    {
      path: '/fr',
      name: 'homefr',
      component: Homefr,
      meta: {
        title : 'Accueil - FinFish'
      }
    },
    {
      path: '/fr/story',
      name: 'storyfr',
      component: Storyfr,
      meta: {
        title : 'Story - FinFish'
      }
    },
    {
      path: '/fr/offf',
      name: 'offffr',
      component: Offffr,
      meta: {
        title : 'OFFF - FinFish'
      }
    }
  ]
})

export default router

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));
  if(!nearestWithMeta) return next();
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');
    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });
    tag.setAttribute('data-vue-router-controlled', '');
    return tag;
  })
      .forEach(tag => document.head.appendChild(tag));
  next();
});