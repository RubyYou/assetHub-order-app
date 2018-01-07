
<template>
  <!-- App -->
  <f7-page data-page="workorder">
    <f7-navbar >
      <f7-nav-left back-link="Back" sliding></f7-nav-left>
      <f7-nav-center>工單列表</f7-nav-center>
    </f7-navbar>
    <f7-list media-list class="close">
      <f7-list-item
              v-for="order in workOrders"
              :title="order.title"
              :ref="order.key"
              :link="'/workorders/' + order.key"
              :subtitle = "order.assignee"
              @click="setWorkOrderId (order.key)"
              :media="setProgressImg (order.progress)">
      </f7-list-item>
    </f7-list>
    <f7-block class="close">
      <f7-grid>
        <f7-col>
          <f7-button fill color="pink" href="/workorders/0" 
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
  import Loader from '../loader/loader.js';

  export default {
    computed: {
      workOrders () {
        return this.$store.state.workOrders;
      }
    },
    methods:{
      setWorkOrderId (key)
      {
        this.$store.commit ('setWorkOrderId', key);
      },
      setProgressImg (imgName)
      {
        let src = '';

        switch (imgName)
        {
          case "start":
            src = "start.png";
            break;
          case "pause":
            src = "pause.png";
            break;
          case "in progress":
            src = "progress.png";
            break;
          case "resolve":
            src = "end.png";
            break;
        }

        return '<img src="img/' + src + '"/>';
      }
    }
  }
</script>

<style>
  .clear{
    clear:both;
  }
</style>