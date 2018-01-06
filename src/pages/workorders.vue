
<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Main Views -->
    <f7-views>
      <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
        <!-- iOS Theme Navbar -->
        <f7-navbar v-if="$theme.ios">
          <f7-nav-center sliding> 工單 </f7-nav-center>
        </f7-navbar>

        <!-- Pages -->
        <f7-pages>
          <f7-page>
            <!-- Material Theme Navbar -->
            <f7-navbar v-if="$theme.material">
              <f7-nav-left>
                <f7-link icon="icon-bars" open-panel="left"></f7-link>
              </f7-nav-left>
              <f7-nav-center sliding></f7-nav-center>
              <f7-nav-right>
                <f7-link icon="icon-bars" open-panel="right"></f7-link>
              </f7-nav-right>
            </f7-navbar>
            <f7-list media-list class="close">
              <f7-list-item
                      v-for="order in workOrders"
                      :title="task.title"
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
                  <f7-button fill color="pink" href="/workorders/add"> 新增項目</f7-button>
                </f7-col>
              </f7-grid>
            </f7-block>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>
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