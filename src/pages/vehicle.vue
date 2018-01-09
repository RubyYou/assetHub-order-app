<template>
  <f7-page data-page="employee">
    <f7-navbar >
      <f7-nav-left back-link="上一頁" sliding></f7-nav-left>
      <f7-nav-center>現場機具</f7-nav-center>
    </f7-navbar>
    <f7-block>

    </f7-block>
  </f7-page>
</template>


<script>
import Loader from '../loader/loader.js';
import Utils from '../utils/utils.js';

export default {
  data: function (){
    return {
      vehicleMap : {
        '挖土機' : 'imgUrl'
      }
    }
  },
  computed: {
    vehicles () {
      return this.$store.state.vehicles;
    }
  },
  methods: {

  }
}
</script>