export default [
  {
      path: '/workorders',
      component: require('./pages/workorders.vue')
  },
  {
      path: '/workorders/add',
      component: require('./pages/workorder-edit.vue')
  },
  {
      path: '/workorders/:key',
      component: require('./pages/workorder-edit.vue')
  },
  {
      path: '/materials',
      component: require('./pages/materials.vue')
  },
  {
      path: '/materials/add',
      component: require('./pages/material-edit.vue')
  },
  {
      path: '/materials/:key',
      component: require('./pages/material-edit.vue')
  }
]