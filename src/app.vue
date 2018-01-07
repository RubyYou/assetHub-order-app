
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
          <f7-nav-center sliding> AssetHub 工單 </f7-nav-center>
        </f7-navbar>
        
        <!-- Pages -->
        <f7-pages>
          <f7-page>
            <f7-navbar v-if="$theme.material">
              <f7-nav-left>
                <f7-link icon="icon-bars" open-panel="left"></f7-link>
              </f7-nav-left>
              <f7-nav-center sliding></f7-nav-center>
              <f7-nav-right>
                <f7-link icon="icon-bars" open-panel="right"></f7-link>
              </f7-nav-right>
            </f7-navbar>
            <f7-block>
              <f7-link href="/workorders" > 工單列表 </f7-link>
              <!-- <f7-link href="/materials"> 材料列表 </f7-link> -->
            </f7-block>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>
  </div>
</template>

<script>

//TODO: this change to home page
export default {

}
</script>

<style>

/* fix issue for slider on chrome and firefox */
.range-slider input[type="range"]::-webkit-slider-thumb { 
    border: 1px solid silver;
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

.list-block input[type=number] {
  height: 30px;
  text-align:center;
}
</style>