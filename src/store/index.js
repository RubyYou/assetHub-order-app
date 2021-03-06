import Vue from 'vue'
import Vuex from 'vuex'
import { vehicles, employees, posts, messages } from '../utils/data'
import Utils from '../utils/utils'

Vue.use(Vuex)

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

// TODO:Image is coming from camera, and can save to album

// TODO: Material can work later after 1/19

// state
export default new Vuex.Store({
    state: {
      workOrders: [],
      workOrderId: null,
      selectedWorkOrder : {},

      vehicles: {},
      employees: {},
      posts: {},
      messages: [],

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

      setVehicles (state, info) {
        // TODO: need to write data from info
        state.vehicles = Utils.sortObjectByDate (vehicles);
      },

      setEmployees (state, info) {
        // TODO: need to write data from info
        state.employees = Utils.sortObjectByDate (employees);
      },

      setPosts (state, info) {
        // TODO: need to write data from info
        state.posts = Utils.sortObjectByDate (posts);
      },

      setMessages (state, info) {
        state.messages = messages;
      },

      setMaterials (state, materials) {
        state.materials = materials;
      }
    }
});