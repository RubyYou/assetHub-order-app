<template>
   <f7-page data-page="space-check1">
    <f7-navbar >
      <f7-nav-left back-link="上一頁" sliding></f7-nav-left>
      <f7-nav-center>{{formTitle}}</f7-nav-center>
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
import { SpaceCheckFormA } from './form-data'

// IMPORTANT : Here sets which form to update
const formName = "SpaceCheckFormA"

export default {
  name : 'SpaceCheckFormA',
  components: {
    SignPopup
  },
  data: function () {
    return SpaceCheckFormA
  },
  computed: mapState ({
    form: state => state.forms.selectedForm
  }),
  methods: mapActions (['updateForm', 'updateSign', 'saveForm']),
  beforeCreate () {
    this.$store.commit ('setSelectedForm', formName);
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
