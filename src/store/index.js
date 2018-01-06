import Vue from 'vue'
import Vuex from 'vuex'
// import Loader from '../loader/loader.js';

Vue.use(Vuex)

// state
export default new Vuex.Store({
    state: {
      workOrders: [],
      workOrderId: null,
      selectedWorkOrder : {},

      materials: [],
      materialId: null,
      selectedMaterial : {}
    },
    mutations: {
      setWorkOrders (state, carehub)
      {
        state.workOrders = carehub;
      },
      setWorkOrderId (state, key)
      {
        state.workOrderId = key;
        const task = state.workOrders.filter (item => {
            return item.key === key;
        })[0];
        state.selectedWorkOrder = task;
      },
      setMaterials (state, materials)
      {
        state.materials = materials;
      },
      updateSelectedWorkOrder (state, payload) {
        // console.log (payload);
        state.selectedWorkOrder [payload.name] = payload.data;
      }
    }
});