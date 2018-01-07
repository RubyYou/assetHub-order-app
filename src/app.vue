
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
          <f7-nav-center sliding> AssetHub </f7-nav-center>
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
              <f7-link href="/workorders" class="logo-wrap"> 
                <div class="logo"></div>
                <h4>工單列表</h4> 
              </f7-link>
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

.logo-wrap{
  text-align:center;
}
.logo-wrap h4{
  font-size: 20px;
  color: #ff314f;
}

.logo {
  width: 200px;
  height: 200px;
  background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIuMDAyIDUxMi4wMDIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMi4wMDIgNTEyLjAwMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxjaXJjbGUgc3R5bGU9ImZpbGw6I0ZGNjI2MjsiIGN4PSIyNTYuMDAxIiBjeT0iMjU2IiByPSIyNTYiLz4KPGc+Cgk8cG9seWdvbiBzdHlsZT0iZmlsbDojRkYzMTRGOyIgcG9pbnRzPSIxODkuODk2LDEwNy43NDYgMjQxLjYyMywxNTkuNDczIDE2MS40NTIsMTU5LjQ3MyAxNjEuNDUyLDExOC42NjIgMTY4LjY1NywxMDcuNzQ2ICAiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRjMxNEY7IiBkPSJNNTEyLjAwMSwyNTZjMC00LjExOC0wLjEwNy04LjIxMS0wLjMtMTIuMjc5TDM4OS4wMDUsMTIxLjAyNSAgIGMwLjAwMi0xLjM3Mi0yNDYuNzgyLDI3Ny4xOTctMjQ2Ljc4MiwyNzcuMTk3bDguNzI2LDguNzI2Yy0xMS4xNjYsNC4zNDQtMTcuOTQyLDYuOTY4LTE3Ljk0Miw2Ljk0Mmw5Ni43ODUsOTYuNzg1ICAgYzguNjE4LDAuODc2LDE3LjM2MSwxLjMyNiwyNi4yMSwxLjMyNkMzOTcuMzg1LDUxMiw1MTIuMDAxLDM5Ny4zODQsNTEyLjAwMSwyNTZ6Ii8+CjwvZz4KPHJlY3QgeD0iMTg5Ljg4OSIgeT0iMTIxLjAxOCIgc3R5bGU9ImZpbGw6I0ZGQUQ5RTsiIHdpZHRoPSIxOTkuMTExIiBoZWlnaHQ9IjI5Mi44NTciLz4KPHJlY3QgeD0iMTYxLjQ0NSIgeT0iMTIxLjAxOCIgc3R5bGU9ImZpbGw6I0ZGRDBDQTsiIHdpZHRoPSIxOTkuMTExIiBoZWlnaHQ9IjI5Mi44NTciLz4KPHJlY3QgeD0iMTMzIiB5PSIxMjEuMDE4IiBzdHlsZT0iZmlsbDojRkZGRkZGOyIgd2lkdGg9IjE5OS4xMTEiIGhlaWdodD0iMjkyLjg1NyIvPgo8cmVjdCB4PSIyMzQuMTU5IiB5PSIxMjEuMDE4IiBzdHlsZT0iZmlsbDojRThFOEU4OyIgd2lkdGg9Ijk3Ljk1MiIgaGVpZ2h0PSIyOTIuODU3Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiMzNjY2OTU7IiBkPSJNMTg0LjcyNCwxMjEuMDI1YzAtNC45OTEtNC4wNi05LjMzOC05LjA1MS05LjMzOHMtOS4wNTEsNC4wNi05LjA1MSw5LjA1MXY1Ni4wOTIgIGMwLDQuOTkxLDQuMDYsOS4wNTEsOS4wNTEsOS4wNTFzOS4wNTEtNC4wNiw5LjA1MS05LjA1MXYtMTUuMjI5YzAtMi44NTcsMi4zMTUtNS4xNzIsNS4xNzItNS4xNzJjMi44NTcsMCw1LjE3MiwyLjMxNSw1LjE3Miw1LjE3MiAgdjE1LjIyOWMwLDEwLjY5My04LjcwMSwxOS4zOTQtMTkuMzk0LDE5LjM5NHMtMTkuMzk0LTguNzAxLTE5LjM5NC0xOS4zOTR2LTU2LjA5MmMwLTEwLjY5Myw4LjcwMS0xOS4zOTQsMTkuMzk0LTE5LjM5NCAgczE5LjM5NCw4Ljk4OCwxOS4zOTQsMTkuNjgySDE4NC43MjR6Ii8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=);
  background-size:contain;
  margin: 0 auto;
}
</style>