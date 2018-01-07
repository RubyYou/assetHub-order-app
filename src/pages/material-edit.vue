<template>
  <f7-page data-page="workorder-edit">
    <f7-navbar title="材料清單" back-link="Back" sliding></f7-navbar>
    <f7-block class="camera">
      <f7-link @click="takePicture">
        <f7-icon f7="camera_fill" color="pink" size="50px"></f7-icon>
        <p> material </p>
      </f7-link>
    </f7-block>
  </f7-page>
</template>

<script>
import Loader, { testImage } from '../loader/loader.js';
import Utils from '../utils/utils.js';

export default {
  computed: {
    materials () {
      return this.$store.state.materials;
    }
  },
  methods:{

  },
  mounted () {

  }
}
</script>