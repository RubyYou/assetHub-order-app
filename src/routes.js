export default [
  {
    path: '/main',
    component: require ('./pages/main.vue')
  },
  {
    path: '/forms/space-check1',
    component: require ('./pages/forms/space-check1.vue')
  },
  {
    path: '/forms/space-check2',
    component: require ('./pages/forms/space-check2.vue')
  },
  {
    path: '/forms/standard/:formDataName',
    component: require ('./pages/forms/standard.vue')
  },
  {
    path: '/forms/standardSections/:formDataName',
    component: require ('./pages/forms/standard-sections.vue')
  }
]