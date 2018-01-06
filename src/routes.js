export default [
  {
      path: '/workorders',
      component: require('./pages/workorder.vue')
  },
  {
      path: '/workorders/add',
      component: require('./pages/workorder-details.vue')
  },
  {
      path: '/workorders/:key',
      component: require('./pages/workorder-details.vue')
  },
  {
      path: '/materials',
      component: require('./pages/material.vue')
  },
  {
      path: '/materials/add',
      component: require('./pages/material-details.vue')
  },
  {
      path: '/materials/:key',
      component: require('./pages/material-details.vue')
  }
]