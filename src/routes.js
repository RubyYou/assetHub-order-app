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
  }
]