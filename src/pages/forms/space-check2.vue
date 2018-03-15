<template>
   <f7-page data-page="space-check2">
    <f7-navbar >
      <f7-nav-left back-link="上一頁" sliding></f7-nav-left>
      <f7-nav-center>局限空間作業設備檢查表</f7-nav-center>
    </f7-navbar>
    <div class="wrap">
    <f7-block-title>{{section.title}}</f7-block-title>
    <f7-list form v-for="item in section.data" >
      <f7-list-item smart-select :title="item.title">
        <select
          :name="item.title"
          v-model="form[item.data]"
          @change = "(e) => { updateForm ({name: item.data, data:e.target.value})}">
          <option value="符合">符合</option>
          <option value="不符合">不符合</option>
        </select>
      </f7-list-item>
      <f7-list-item>
        <f7-input type="textarea"
                  :name="item.note"
                  :placeholder="item.note"
                  :value="form[item.data_note]"
                  @change = "(e) => { updateForm ({name: item.data_note, data:e.target.value})}">
        </f7-input>
      </f7-list-item>
    </f7-list>
    <f7-block >
      <p>表單簽收</p>
      <SignPopup :updateSign="updateSign" /> <br/>
      <f7-button fill green @click=" saveForm ($f7) ">
        儲存本表格
      </f7-button>
    </f7-block>
    </div>
  </f7-page>
</template>
<script>

import SignPopup from '../../components/signPopup.vue'
import { mapState, mapActions } from 'vuex'
// IMPORTANT : Here sets which form to update
const formInfo = { formName: "formB", formType: "spaceCheck" }

export default {
  name : 'SpaceCheckB',
  components: {
    SignPopup
  },
  data: function () {
    return {
     section: {
      title: "檢查項目",
      data: [
        { title: '1.局限空間作業場所告示牌', data:"check1",
          note: "備註", data_note: "check1Note"
        },
        { title: '2.工程告示牌', data:"check2",
          note: "備註", data_note: "check2Note"
        },
        { title: '3.安全衛生告示牌', data:"check3",
          note: "備註", data_note: "check3Note"
        },
        { title: '4.工地安全衛生工作守則', data:"check4",
          note: "備註", data_note: "check4Note"
        },
        { title: '5.發電機（含接地）', data:"check5",
          note: "備註", data_note: "check5Note"
        },
        { title: '6.電氣設備（分電箱、漏電斷路器、無熔絲開關、接地）', data:"check6",
          note: "備註", data_note: "check6Note"
        },
        { title: '7.通風換氣設備', data:"check7",
          note: "備註", data_note: "check7Note"
        },
        { title: '8.開口護欄', data:"check8",
          note: "備註", data_note: "check8Note"
        },
        { title: '9.四用氣體偵測器（主動式）', data:"check9",
          note: "備註", data_note: "check9Note"
        },
        { title: '10.通訊設備（對講機', data:"check10",
          note: "備註", data_note: "check10Note"
        },
        { title: '14.負背式安全帶加捲揚式防墜器', data:"check11",
          note: "備註", data_note: "check11Note"
        },
        { title: '15.空氣呼吸器（供氣式)', data:"check12",
          note: "備註", data_note: "check12Note"
        },
        { title: '16.生命偵測器', data:"check13",
          note: "備註", data_note: "check13Note"
        },
        { title: '17.井口氣體偵測電子顯示器(自動報警)', data:"check14",
          note: "備註", data_note: "check14Note"
        },
        { title: '18.安全帽', data:"check15",
          note: "備註", data_note: "check15Note"
        },
        { title: '19.安全鞋（防滑鞋）', data:"check16",
          note: "備註", data_note: "check16Note"
        },
        { title: '20.照明設備', data:"check17",
          note: "備註", data_note: "check17Note"
        }
      ]
     },
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
