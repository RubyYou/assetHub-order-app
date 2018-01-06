<template>
  <f7-page>
    <f7-navbar title="新增" back-link="Back" sliding></f7-navbar>
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
    task () {
      return this.$store.state.mode;
    }
  },
  methods:{

  },
  mounted () {

  }
}
</script>