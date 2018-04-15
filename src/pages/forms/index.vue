<template>
    <f7-page data-page="forms" class="form-page">
         <f7-navbar >
            <f7-nav-left back-link="上一頁" sliding></f7-nav-left>
            <f7-nav-center>工項表單</f7-nav-center>
        </f7-navbar>
        <br/><br/>

        <div v-for="form in formList">
            <f7-block-title >
                {{form.title}}
            </f7-block-title>
            <f7-list>
                <f7-list-item
                    v-for="item in form.list"
                    :link="item.href"
                    :title="item.title">
                </f7-list-item>
            </f7-list>
        </div>
    </f7-page>
</template>
<script>
import { mapState } from "vuex"

export default {
  computed: mapState({
    formList: state => state.config.formList
  })
}
</script>
<style scoped >


</style>
