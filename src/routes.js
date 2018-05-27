export default [
    {
        path: '/main',
        component: require('./pages/main.vue'),
    },
    {
        path: '/forms/standard/:formDataName',
        component: require('./pages/forms/standard.vue'),
    },
    {
        path: '/forms/standardSections/:formDataName',
        component: require('./pages/forms/standard-sections.vue'),
    },
    {
        path: '/messager',
        component: require('./components/messager.vue'),
    },
    {
        path: '/charts',
        component: require('./pages/charts/index.vue'),
    },
    {
        path: '/charts/water/:dataType',
        component: require('./pages/charts/templates/water.vue'),
    },
    {
        path: '/charts/rain/:dataType',
        component: require('./pages/charts/templates/rain.vue'),
    },
    {
        path: '/charts/gas/:dataType',
        component: require('./pages/charts/templates/gas.vue')
    },
    {
        path: '/charts/tilt/:dataType',
        component: require('./pages/charts/templates/tilt.vue')
    },
    {
        path: '/forms',
        component: require('./pages/forms/index.vue'),
    },
    {
        path: '/posts',
        component: require('./pages/posts/index.vue'),
    },
    {
        path: '/checkins/:type',
        component: require('./pages/checkins/index.vue'),
    },
    {
        path: '/ipcam',
        component: require('./pages/ipcam/index.vue'),
    },
    {
        path: '/tracking',
        component: require('./pages/tracking/index.vue'),
    },
]