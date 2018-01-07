import Vue from 'vue'
import Vuex from 'vuex'
// import Loader from '../loader/loader.js';

Vue.use(Vuex)

// there is error here
// use default data for creat New, 
const workOrderDefaultData = {
  assignee : "",
  details : "",
  endTime: new Date().getTime (),
  hour: 1,
  lastUpdated: new Date().getTime (), 
  location: "B3",
  minus:0,
  progress: "in progress",
  progressTime: 0,
  showDatePicker: false,
  supervisor: "Karen",
  title: "地上層服務核心區",
  type: "月定期維護",
  selfSign: {
    color: "#000000",
    clickX: [],
    clickY: [],
    clickDrag: []
  },
  customerSign: {
    color: "#000000",
    clickX: [],
    clickY: [],
    clickDrag: []
  },
  "images" : []
};
// Image is coming from an album

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