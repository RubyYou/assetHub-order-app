<template>
   <f7-page data-page="space-check1">
    <f7-navbar >
      <f7-nav-left back-link="上一頁" sliding></f7-nav-left>
      <f7-nav-center>{{formTitle}}</f7-nav-center>
    </f7-navbar>
    <div class="standard-form">
        <div v-for="section in sections" >
            <f7-block-title>{{section.title}}</f7-block-title>
            <f7-list form v-for="item in section.content" >
                <f7-list-item v-if="item.input">
                    <f7-label>{{item.input}}</f7-label>
                    <f7-input :type="item.input_type || 'text'"
                              v-model="form[item.data_input]"
                              @change = "(e) => { updateForm ({name: item.data_input, data: e.target.value})}" />
                </f7-list-item>

                <f7-list-item v-if="item.title" smart-select :title="item.title">
                <select
                    :name="item.title"
                    v-model="form[item.data]"
                    @change = "(e) => { updateForm ({name: item.data, data: e.target.value})}">
                    <option value="符合">符合</option>
                    <option value="不符合">不符合</option>
                </select>
                </f7-list-item>

                <f7-list-item v-if="item.note">
                <f7-input type="textarea"
                            :name="item.note"
                            :placeholder="item.note"
                            :value="form[item.data_note]"
                            @change = "(e) => { updateForm ({name: item.data_note, data: e.target.value})}">
                </f7-input>
                </f7-list-item>
            </f7-list>
        </div>
    </div>
    <f7-block>
      <div v-if="sign !== false">
        <p>表單簽收</p>
        <SignPopup :updateSign="updateSign" /> <br/>
      </div>
      <f7-button fill green @click=" saveForm ($f7) ">
        儲存本表格
      </f7-button>
    </f7-block>
  </f7-page>
</template>

<script>
import SignPopup from '../../components/signPopup.vue'
import { mapState, mapActions } from 'vuex'
import * as FormData from './form-data'

// IMPORTANT : Here sets which form to update
let formName = ""

export default {
  name : formName,
  components: {
    SignPopup
  },
  data: function () {
    return FormData[formName]
  },
  computed: mapState ({
    form: state => state.forms.selectedForm
  }),
  methods: mapActions (['updateForm', 'updateSign', 'saveForm']),
  beforeCreate () {
    console.assert (this.$route.params.formDataName)
    formName = this.$route.params.formDataName
    console.log ('formDataName', formName)
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

.standard-form {
    margin-top:60px;
}
</style>
