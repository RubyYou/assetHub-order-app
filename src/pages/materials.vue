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
    },
    imageData (){
      return this.$store.state.imageData;
    }
  },
  methods:{
    takePicture: function() {
      let srcType = Camera.PictureSourceType.CAMERA;
      let options = this.setOptions (srcType);
      navigator.camera.getPicture (this.successCallback, this.onFail, options);
      //this.successCallback (testImage);
    },
    setOptions: function (srcType) {
      var options = {
          quality: 50,
          destinationType: Camera.DestinationType.DATA_URL,
          // In this app, dynamically set the picture source, Camera or photo gallery
          sourceType: srcType,
          encodingType: Camera.EncodingType.JPEG,
          mediaType: Camera.MediaType.PICTURE,
          allowEdit: true,
          correctOrientation: true  //Corrects Android orientation quirks
      }
      return options;
    },
    successCallback: function (imageData) {
      let imageInfo = "data:image/jpeg;base64," + imageData;
      this.$store.commit ("storeImage", imageInfo);
      this.$router.loadPage('/item/0');
    },
    onFail: function (message) {
      alert('Failed because: ' + message);
    }
  },
  mounted (){
    this.$store.commit ("addNewItem");
  }
}
</script>