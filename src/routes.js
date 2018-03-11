export default [
  {
    path: '/workorders',
    component: require ('./pages/workorders.vue')
  },
  {
    path: '/check',
    component: require ('./pages/space-check.vue')
  },
  {
    path: '/vechiclecheck',
    component: require ('./pages/vehiclecheck.vue')
  },
  {
    path: '/worksafe',
    component: require ('./pages/worksafecheck.vue')
  },
  {
    path: '/workorders/:key',
    component: require ('./pages/workorder-edit.vue')
  },

  {
    path: '/chart',
    component: require ('./pages/chart-list.vue')
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