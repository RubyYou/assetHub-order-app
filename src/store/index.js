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
      selectedMaterial : {},

      checkOrder: {
        check1: null,
        check2: null,
        check3: null,
        check4: null,
        check5: null,
        check7: null,
        check8: null,
        check9: null,
        check10: null,
        check11: null,
        check12: null,
        check13: null,
        check14: null,
        check15: null,
        check16: null,
        check17: null,
        check18: null
        
        
      },
      selfOrder: {
        selfcheck1: null,
        selfcheck2: null,
        selfcheck3: null,
        selfcheck4: null,
        selfcheck5: null,
        selfcheck6: null,
        selfcheck7: null,
        selfcheck8: null,
        selfcheck9: null,
        selfcheck10: null,
        selfcheck11: null,
        selfcheck12: null,
        selfcheck13: null,
        selfcheck14: null,
        selfcheck15: null,
        selfcheck16: null,
        selfcheck17: null,
        selfcheck18: null,
        selfcheck19: null,
        selfcheck20: null,
        selfcheck21: null,
        selfcheck22: null,
        selfcheck23: null,
        selfcheck24: null,
        selfcheck25: null,
        selfcheck26: null,
        selfcheck27: null,
        selfcheck28: null,
        selfcheck29: null,
        selfcheck30: null,
        selfcheck31: null,
        selfcheck32: null,
        selfcheck33: null,
        selfcheck34: null,
        selfcheck35: null,
        selfcheck36: null,
        selfcheck37: null,
        selfcheck38: null,
        selfcheck39: null,
        selfcheck40: null,
        selfcheck41: null,
        selfcheck42: null,
        selfcheck43: null,
        selfcheck44: null,
        selfcheck45: null
      },
      safeOrder:{
        check1: null,
        check1_note: '',
        check2: null,
        check2_note: '',
        check3: null,
        check3_note: '',
        check4: null,
        check4_note: '',
        check5: null,
        check5_note: '',
        check6: null,
        check6_note: '',
        check7: null,
        check7_note: '',
        check8: null,
        check8_note: '',
        check9: null,
        check9_note: '',
        check10: null,
        check10_note: '',
        check11: null,
        check11_note: '',
        check12: null,
        check12_note: '',
        check13: null,
        check13_note: '',
        check14: null,
        check14_note: '',
        check15: null,
        check15_note: '',
        check16: null,
        check16_note: '',
        check17: null,
        check17_note: '',
        check18: null,
        check18_note: '',
        check19: null,
        check19_note: '',
        check20: null,
        check20_note: '',
        check21: null,
        check21_note: '',
        check22: null,
        check22_note: '',
        check23: null,
        check23_note: '',
        check24: null,
        check24_note: '',
        check25: null,
        check25_note: '',
        check26: null,
        check26_note: '',
        check27: null,
        check27_note: '',
        check28: null,
        check28_note: '',
        check29: null,
        check29_note: '',
        check30: null,
        check30_note: '',
        check31: null,
        check31_note: '',
        check32: null,
        check32_note: '',
        check33: null,
        check33_note: '',
        check34: null,
        check34_note: '',
        check35: null,
        check35_note: '',
        check36: null,
        check36_note: '',
        check37: null,
        check37_note: '',
        check38: null,
        check38_note: '',
        check39: null,
        check39_note: '',
        check40: null,
        check40_note: '',
        check41: null,
        check41_note: '',
        check42: null,
        check42_note: '',
        check43: null,
        check43_note: '',
        check44: null,
        check44_note: '',
        check45: null,
        check45_note: '',
        check46: null,
        check46_note: '',
        check47: null,
        check47_note: '',
        check48: null,
        check48_note: '',
        check49: null,
        check49_note: '',
        check50: null,
        check50_note: '',
        check51: null,
        check51_note: '',
        check52: null,
        check52_note: '',
        check53: null,
        check53_note: '',
        check54: null,
        check54_note: '',
        check55: null,
        check55_note: '',
        check56: null,
        check56_note: '',
        check57: null,
        check57_note: '',
        check58: null,
        check58_note: '',
        check59: null,
        check59_note: '',
        check60: null,
        check60_note: '',
        check61: null,
        check61_note: '',
        check62: null,
        check62_note: '',
        check63: null,
        check63_note: '',
        check64: null,
        check64_note: '',
        check65: null,
        check65_note: '',
        check66: null,
        check66_note: '',
        check67: null,
        check67_note: '',
        check68: null,
        check68_note: '',
        check69: null,
        check69_note: '',
        check70_note: '',
        check71: null,
        check71_note: '',
        check72: null,
        check72_note: '',
        check73: null,
        check73_note: '',
        check74: null,
        check74_note: '',
        check75: null,
        check75_note: '',
        check76: null,
        check76_note: '',
        check77: null,
        check77_note: '',
        check78: null,
        check78_note: '',
        check79: null,
        check79_note: '',

      }

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
      },

      // CheckOrder
      updateCheckOrder (state, payload) {
        state.checkOrder [payload.name] = payload.data;
      },
      // CheckOrder
      updateSafeOrder (state, payload) {
        state.safeOrder [payload.name] = payload.data;
      },

    }
});