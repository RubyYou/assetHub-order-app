export default [
  {
    path: '/main',
    component: require ('./pages/main.vue')
  },
  {
    path: '/forms/standard/:formDataName',
    component: require ('./pages/forms/standard.vue')
  },
  {
    path: '/forms/standardSections/:formDataName',
    component: require ('./pages/forms/standard-sections.vue')
  },
  {
    path: '/messager',
    component: require ('./components/messager.vue')
  },
  {
    path: '/charts',
    component: require ('./pages/charts/index.vue')
  },
  {
    path: '/forms',
    component: require ('./pages/forms/index.vue')
  },
  {
    path: '/posts',
    component: require ('./pages/posts/index.vue')
  },
  {
    path: '/checkins/:type',
    component: require ('./pages/checkins/index.vue')
  }
]