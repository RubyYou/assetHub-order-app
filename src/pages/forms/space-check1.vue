<template>
   <f7-page data-page="space-check1">
    <f7-navbar >
      <f7-nav-left back-link="上一頁" sliding></f7-nav-left>
      <f7-nav-center>局限空間作業檢點表</f7-nav-center>
    </f7-navbar>
    <div v-for="section in sections" class="wrap">
      <f7-block-title>{{section.title}}</f7-block-title>
      <f7-list form v-for="item in section.data" >
        <f7-list-item smart-select :title="item.title">
          <select
            :name="item.title"
            v-model="form[item.data]"
            @change = "(e) => { updateForm ({name: item.data, data: e.target.value})}">
            <option value="符合">符合</option>
            <option value="不符合">不符合</option>
          </select>
        </f7-list-item>
        <f7-list-item>
          <f7-input type="textarea"
                    :name="item.note"
                    :placeholder="item.note"
                    :value="form[item.data_note]"
                    @change = "(e) => { updateForm ({name: item.data_note, data: e.target.value})}">
          </f7-input>
        </f7-list-item>
      </f7-list>
    </div>
    <f7-block>
      <p>表單簽收</p>
      <SignPopup :updateSign="updateSign" /> <br/>
      <f7-button fill green @click=" saveForm ($f7) ">
        儲存本表格
      </f7-button>
    </f7-block>
  </f7-page>
</template>

<script>
import SignPopup from '../../components/signPopup.vue'
import { mapState, mapActions } from 'vuex'

// IMPORTANT : Here sets which form to update
const formInfo = { formName: "formA", formType: "spaceCheck" }

export default {
  name : 'SpaceCheckA',
  components: {
    SignPopup
  },
  data: function () {
    return { // can reaplace data with title note, but if the title is the same, it will be weird
     sections: [
      {
      title: "一、許可",
      data: [
        { title: '必須要進去嗎', data:"check1",
          note: "改善措施內容", data_note: "check1Note"
        },
        { title: '該場所是否已准許進入工作', data:"check2",
          note: "改善措施內容", data_note: "check2Note"
        },
        { title: '是否已提供緊急聯絡電話', data:"check3",
          note: "改善措施內容", data_note: "check3Note"
        }
      ]
     },
     {
      title: "二、空氣測試",
      data: [
        { title: '空氣測試儀器是否已校正', data:"check4",
          note: "改善措施內容", data_note: "check4Note"
        },
        { title: '局限空間於本次作業前是否已測試', data:"check5",
          note: "改善措施內容", data_note: "check5Note"
        },
        { title: '氧氣濃度是否介於18%〜21%之間', data:"check6",
          note: "改善措施內容", data_note: "check6Note"
        },
        { title: '是否具有毒性、易燃性或缺氧', data:"check7",
          note: "硫化氫 一氧化碳 可燃性氣體 其他", data_note: "check7Note"
        }
      ]
     },
     {
      title: "三、監測",
      data: [
        { title: '是否將監測工作期間的空氣', data:"check8",
          note: "改善措施內容", data_note: "check8Note"
        },
        { title: '是否將於工作期間持續監測', data:"check9",
          note: "改善措施內容", data_note: "check9Note"
        },
        { title: '是否為非持續性監測', data:"check10",
          note: "改善措施內容", data_note: "check10Note"
        }
      ]
     },
     {
      title: "四、通風",
      data: [
        { title: '是否已通風換氣過', data:"check11",
          note: "改善措施內容", data_note: "check11Note"
        },
        { title: '通風量是否足夠', data:"check12",
          note: "改善措施內容", data_note: "check12Note"
        },
        { title: '是否將於工作期間持續通風', data:"check13",
          note: "改善措施內容", data_note: "check13Note"
        },
        { title: '空氣來源是否新鮮（無排放廢氣、灰塵或有毒物質）', data:"check14",
          note: "改善措施內容", data_note: "check14Note"
        },
        { title: '通風後是否再測定過（確認安全性）', data:"check15",
          note: "改善措施內容", data_note: "check15Note"
        }
      ]
     },
     {
      title: "五、隔離",
      data: [
        { title: '是否已完全隔離危害能源', data:"check16",
          note: "改善措施內容", data_note: "check16Note"
        },
        { title: '供電系統是否已上鎖', data:"check17",
          note: "改善措施內容", data_note: "check17Note"
        },
        { title: '機械設備之轉動部份是否已卡住，使其不能轉動或傳動以免造成夾捲傷害', data:"check18",
          note: "改善措施內容", data_note: "check18Note"
        },
        { title: '導管是否已洩壓', data:"check19",
          note: "改善措施內容", data_note: "check19Note"
        },
      ]
     },
     {
      title: "六、衣物/設備",
      data: [
        { title: '是否需特殊之工作服（安全鞋、防護衣、安全眼鏡等）', data:"check20",
          note: "如是，請寫明", data_note: "check20Note"
        },
        { title: '是否需特殊設備（搶救設備、通訊設備等）', data:"check21",
          note: "如是，請寫明", data_note: "check21Note"
        },
        { title: '是否需特殊工具（防火、防爆、具漏電斷路功能之工具）', data:"check22",
          note: "如是，請寫明", data_note: "check22Note"
        }
      ]
     },
     {
      title: "七、呼吸防護具",
      data: [
        { title: '是否置備合格之呼吸防護具', data:"check23",
          note: "如是，請寫明", data_note: "check23Note"
        },
        { title: '是否需配戴呼吸防護具', data:"check24",
          note: "如是，請寫明", data_note: "check24Note"
        },
        { title: '佩戴呼吸防護具是否可通過入口', data:"check25",
          note: "如是，請寫明", data_note: "check25Note"
        },
      ]
     },
     {
      title: "八、救援設備",
      data: [
        { title: '於深水井上方設置1條救生母索，供監測人員使用', data:"check26",
          note: "如是，請寫明", data_note: "check26Note"
        },
        { title: '局限空間作業人員是否佩戴背負式安全帶加捲揚式防墜器', data:"check27",
          note: "如是，請寫明", data_note: "check27Note"
        },
        { title: '局限空間作業人員是否佩戴四用氣體偵測器', data:"check28",
          note: "如是，請寫明", data_note: "check28Note"
        },
      ]
     },
     {
      title: "九、教育訓練",
      data: [
        { title: '是否已受過如何使用呼吸防護具的訓練', data:"check29",
          note: "如是，請寫明", data_note: "check29Note"
        },
        { title: '是否有已受過急救/CPR訓練之人員在現場', data:"check30",
          note: "如是，請寫明", data_note: "check30Note"
        },
        { title: '施工人員是否受過局空間作業訓練', data:"check31",
          note: "如是，請寫明", data_note: "check31Note"
        },
      ]
     },
     {
      title: "十、監視/搶救",
      data: [
        { title: '是否有場外監視人員進行全程監視及通訊工作', data:"check32",
          note: "如是，請寫明", data_note: "check32Note"
        },
        { title: '監視人員是否可全程監視及進行通訊聯繫', data:"check33",
          note: "如是，請寫明", data_note: "check33Note"
        },
        { title: '監視人員是否受過搶救訓練', data:"check34",
          note: "如是，請寫明", data_note: "check34Note"
        },
        { title: '是否設置搶救人員裝置（救生母索、人員固定擔架', data:"check35",
          note: "如是，請寫明", data_note: "check35Note"
        },
        { title: '是否規劃整個單位之緊急應變程序', data:"check36",
          note: "如是，請寫明", data_note: "check36Note"
        },
        { title: '是否熟知緊急應變程序', data:"check37",
          note: "如是，請寫明", data_note: "check37Note"
        },
        { title: '意外發生時是否知道如何通告及通告對象為為何', data:"check38",
          note: "如是，請寫明", data_note: "check38Note"
        },
      ]
     }
     ]
    }
  },
  computed: mapState ({
    form: state => state.forms.selectedForm
  }),
  methods: mapActions (['updateForm', 'updateSign', 'saveForm']),
  beforeCreate () {
    this.$store.commit ('setSelectedForm', formInfo);
  }
}
</script>
<style lang="sass" scoped >
.list-block{
    margin: 0;
}

.content-block-title{
  font-size:20px
}
.list-block textarea{
  height:80px
}
.wrap {
  margin-top: 60px;
}
</style>
