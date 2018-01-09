<template>
  <f7-page data-page="materials">
    <f7-navbar >
      <f7-nav-left back-link="上一頁" sliding></f7-nav-left>
      <f7-nav-center>材料清單</f7-nav-center>
    </f7-navbar>
    <f7-list media-list class="close">
      <f7-list-item
        v-for="material in materials"
        :title="order.title"
        :ref="order.key"
        :link="'/materials/' + order.key"
        :subtitle = "order.assignee"
        @click="setWorkOrderId (order.key)"
        :media="setProgressImg (order.progress)">
      </f7-list-item>
    </f7-list>
    <f7-block class="close">
      <f7-grid>
        <f7-col>
          <f7-button fill color="pink" href="/materials/0" 
            @click="setWorkOrderId(0)"> 
            新增項目
          </f7-button>
        </f7-col>
      </f7-grid>
    </f7-block>
    </f7-page>
  </div>
</template>


<script>
export default {
  computed: {
    materials () {
      return this.$store.state.materials;
    }
  },
  methods: {

  }
}
</script>