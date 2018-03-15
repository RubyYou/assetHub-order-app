<template>
    <div>
        <f7-buttons>
            <f7-button @click = "sign ('signA', signData.signA)">檢查人員簽名</f7-button>
            <f7-button @click = "sign ('signB', signData.signB)">工地主任簽名</f7-button>
            <f7-button @click = "sign ('signC', signData.signC)">總招簽名</f7-button>
        </f7-buttons>
        <f7-popup class="sign">
            <canvas id="canvas"> </canvas>
            <f7-buttons>
                <f7-button @click = "cleanDraw">清除</f7-button>
                <f7-button @click = "closePopup" class="popup-close">關閉簽名</f7-button>
            </f7-buttons>
        </f7-popup>
    </div>
</template>

<script>
import DrawApp from './draw';
import { mapState } from 'vuex'

export default {
  props: {
    updateSign: Function
  },
  data: function () {
    return {
        signColor : "#000000",
        signType : "signA"
    }
  },
  computed: mapState ({
    signData: state => state.forms.signData
  }),
  methods: {
    sign (signType, data = {}) {
      this.signType = signType;
      this.drawApp.enablePant (true);
      const clickExist = Array.isArray (data.clickX) === true && Array.isArray (data.clickX) === true;
      const clickDragExist =  Array.isArray (data.clickDrag) === true;
      if (clickExist && clickDragExist === true)
      {
        this.drawApp.setDrawing (this.signColor, data.clickX, data.clickY, data.clickDrag);
      } else {
        this.drawApp.clean ();
      }
      this.$f7.popup ('.sign');
    },
    cleanDraw () {
      this.drawApp.clean ();
    },
    closePopup () {
      this.drawApp.enablePant (false);
      const payload = {
          type: this.signType,
          data: this.drawApp.getDrawData ()
      }
      this.updateSign (payload)
      this.$f7.closeModal('.sign', true);
    }
  },
  mounted() { // this only happen when form initialize
    const width = window.innerWidth;
    const height = window.innerHeight * 0.8;
    this.drawApp = new DrawApp (width, height);
  }
}
</script>
<style lang="sass" scoped >
</style>