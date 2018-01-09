export default [
  {
    path: '/workorders',
    component: require ('./pages/workorders.vue')
  },
  {
    path: '/workorders/:key',
    component: require ('./pages/workorder-edit.vue')
  },

  {
    path: '/chart',
    component: require ('./pages/chart.vue')
  },
  {
    path: '/vehicle',
    component: require ('./pages/vehicle.vue')
  },
  {
    path: '/employee',
    component: require ('./pages/employee.vue')
  },
  {
    path: '/post',
    component: require ('./pages/post.vue')
  },
  {
    path: '/messager',
    component: require ('./pages/messager.vue')
  },

  {
    path: '/materials',
    component: require ('./pages/materials.vue')
  },
  {
    path: '/materials/:key',
    component: require ('./pages/material-edit.vue')
  }
]