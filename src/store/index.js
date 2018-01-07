import Vue from 'vue'
import Vuex from 'vuex'
// import Loader from '../loader/loader.js';

Vue.use(Vuex)

// there is error here
// use default data for creat New, 
const defaultWorkOrder = {
  assignee : "",
  details : "",
  endTime: new Date().getTime (),
  hour: 1,
  lastUpdated: new Date().getTime (), 
  location: "B1",
  minus:0,
  progress: "start",
  progressTime: 0,
  showDatePicker: false,
  supervisor: "",
  title: "",
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
  note: "",
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
        // addNew
        if (key == 0) {
          state.selectedWorkOrder = defaultWorkOrder;
        } else {
          state.selectedWorkOrder = state.workOrders.filter (item => {
            return item.key === key;
          })[0];
        }
      },
      updateSelectedWorkOrder (state, payload) {
        state.selectedWorkOrder [payload.name] = payload.data;
      },

      setMaterials (state, materials)
      {
        state.materials = materials;
      }
    }
});