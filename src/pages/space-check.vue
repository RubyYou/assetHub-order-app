<template>
   <f7-page data-page="self-check">
    <f7-navbar >
      <f7-nav-left back-link="上一頁" sliding></f7-nav-left>
      <f7-nav-center>局限空間作業檢點表</f7-nav-center>
      <f7-subnavbar>
        <f7-segmented>
          <f7-button tab-link="#tab1" tab-link-active>Tab 1</f7-button>
          <f7-button tab-link="#tab2">Tab 2</f7-button>
        </f7-segmented>
      </f7-subnavbar>
    </f7-navbar> 

 <f7-tabs>
    <f7-tab id="tab1" tab-active>
    <f7-block class="close">
     <f7-block-title> 一、許可 </f7-block-title>
      <f7-block-title> 必須要進去嗎 </f7-block-title>
      <f7-list form>
        <f7-list-item radio name="my-radio" value="1" title="是" checked></f7-list-item>
        <f7-list-item radio name="my-radio" value="2" title="否"></f7-list-item>       
      </f7-list>
      <f7-block-title> 該場所是否已准許進入工作 </f7-block-title>
      <f7-list form>
        <f7-list-item radio name="my-radio" value="1" title="是" checked></f7-list-item>
        <f7-list-item radio name="my-radio" value="2" title="否"></f7-list-item>       
      </f7-list>
      <f7-block-title> 是否已提供緊急聯絡電話 </f7-block-title>
      <f7-list form>
        <f7-list-item radio name="my-radio" value="1" title="是" checked></f7-list-item>
        <f7-list-item radio name="my-radio" value="2" title="否"></f7-list-item>       
      </f7-list>
    <f7-block-title> 二、空氣測試 </f7-block-title>
    <f7-block-title> 空氣測試儀器是否已校正 </f7-block-title>
      <f7-list form>
        <f7-list-item radio name="my-radio" value="1" title="是" checked></f7-list-item>
        <f7-list-item radio name="my-radio" value="2" title="否"></f7-list-item>       
      </f7-list>
      <f7-block-title> 局限空間於本次作業前是否已測試 </f7-block-title>
      <f7-list form>
        <f7-list-item radio name="my-radio" value="1" title="是" checked></f7-list-item>
        <f7-list-item radio name="my-radio" value="2" title="否"></f7-list-item>       
      </f7-list>
      <f7-block-title> 氧氣濃度是否介於18%〜21%之間 </f7-block-title>
      <f7-list form>
        <f7-list-item radio name="my-radio" value="1" title="是" checked></f7-list-item>
        <f7-list-item radio name="my-radio" value="2" title="否"></f7-list-item>       
      </f7-list>
       <f7-block-title> 是否具有毒性、易燃性或缺氧 </f7-block-title>
      <f7-list form>
        <f7-list-item radio name="my-radio" value="1" title="硫化氫" checked></f7-list-item>
        <f7-list-item radio name="my-radio" value="2" title="一氧化碳"></f7-list-item>     
        <f7-list-item radio name="my-radio" value="2" title="其他"></f7-list-item>       
      </f7-list>
      <f7-block-title> 三、監測 </f7-block-title>
    <f7-block-title> 是否將監測工作期間的空氣 </f7-block-title>
      <f7-list form>
        <f7-list-item radio name="my-radio" value="1" title="是" checked></f7-list-item>
        <f7-list-item radio name="my-radio" value="2" title="否"></f7-list-item>       
      </f7-list>
      <f7-block-title> 是否將於工作期間持續監測 </f7-block-title>
      <f7-list form>
        <f7-list-item radio name="my-radio" value="1" title="是" checked></f7-list-item>
        <f7-list-item radio name="my-radio" value="2" title="否"></f7-list-item>       
      </f7-list>
      <f7-block-title> 是否為非持續性監測 </f7-block-title>
      <f7-list form>
        <f7-list-item radio name="my-radio" value="1" title="是" checked></f7-list-item>
        <f7-list-item radio name="my-radio" value="2" title="否"></f7-list-item>       
      </f7-list>
      <f7-block-title> 四、通風 </f7-block-title>
    <f7-block-title> 是否已通風換氣過 </f7-block-title>
      <f7-list form>
        <f7-list-item radio name="my-radio" value="1" title="是" checked></f7-list-item>
        <f7-list-item radio name="my-radio" value="2" title="否"></f7-list-item>       
      </f7-list>
      <f7-block-title> 通風量是否足夠 </f7-block-title>
      <f7-list form>
        <f7-list-item radio name="my-radio" value="1" title="是" checked></f7-list-item>
        <f7-list-item radio name="my-radio" value="2" title="否"></f7-list-item>       
      </f7-list>
      <f7-block-title> 是否將於工作期間持續通風 </f7-block-title>
      <f7-list form>
        <f7-list-item radio name="my-radio" value="1" title="是" checked></f7-list-item>
        <f7-list-item radio name="my-radio" value="2" title="否"></f7-list-item>       
      </f7-list>
     <f7-block-title> 空氣來源是否新鮮（無排放廢氣、灰塵或有毒物質） </f7-block-title>
      <f7-list form>
        <f7-list-item radio name="my-radio" value="1" title="是" checked></f7-list-item>
        <f7-list-item radio name="my-radio" value="2" title="否"></f7-list-item>       
      </f7-list>
      <f7-block-title> 通風後是否再測定過（確認安全性）</f7-block-title>
      <f7-list form>
        <f7-list-item radio name="my-radio" value="1" title="是" checked></f7-list-item>
        <f7-list-item radio name="my-radio" value="2" title="否"></f7-list-item>       
      </f7-list>
       <f7-block-title> 五、隔離 </f7-block-title>
    <f7-block-title> 是否已完全隔離危害能源 </f7-block-title>
      <f7-list form>
        <f7-list-item radio name="my-radio" value="1" title="是" checked></f7-list-item>
        <f7-list-item radio name="my-radio" value="2" title="否"></f7-list-item>       
      </f7-list>
      <f7-block-title> 供電系統是否已上鎖 </f7-block-title>
      <f7-list form>
        <f7-list-item radio name="my-radio" value="1" title="是" checked></f7-list-item>
        <f7-list-item radio name="my-radio" value="2" title="否"></f7-list-item>       
      </f7-list>
      <f7-block-title> 機械設備之轉動部份是否已卡住，使其不能轉動或傳動以免造成夾捲傷害 </f7-block-title>
      <f7-list form>
        <f7-list-item radio name="my-radio" value="1" title="是" checked></f7-list-item>
        <f7-list-item radio name="my-radio" value="2" title="否"></f7-list-item>       
      </f7-list>
     <f7-block-title> 管是否已洩壓 </f7-block-title>
      <f7-list form>
        <f7-list-item radio name="my-radio" value="1" title="是" checked></f7-list-item>
        <f7-list-item radio name="my-radio" value="2" title="否"></f7-list-item>       
      </f7-list>
        <f7-block-title> 六、衣物/設備 </f7-block-title>
        <f7-block-title> 是否需特殊之工作服（安全鞋、防護衣、安全眼鏡等） </f7-block-title>
          <f7-list form>
            <f7-list-item radio name="my-radio" value="1" title="是" checked></f7-list-item>
            <li class="align-top">
              <div class="item-content">
                <div class="item-media"><i class="icon f7-icons">chat</i></div>
                <div class="item-inner">
                  <div class="item-title label">如是，請寫明</div>
                  <div class="item-input">
                    <textarea></textarea>
                  </div>
                </div>
              </div>
        </li>
        <f7-list-item radio name="my-radio" value="2" title="否"></f7-list-item>       
      </f7-list>
      <f7-block-title> 是否需特殊設備（搶救設備、通訊設備等）</f7-block-title>
      <f7-list form>
        <f7-list-item radio name="my-radio" value="1" title="是" checked></f7-list-item>
        <li class="align-top">
      <div class="item-content">
        <div class="item-media"><i class="icon f7-icons">chat</i></div>
        <div class="item-inner">
          <div class="item-title label">如是，請寫明</div>
          <div class="item-input">
            <textarea></textarea>
          </div>
        </div>
      </div>
    </li>
        <f7-list-item radio name="my-radio" value="2" title="否"></f7-list-item>       
      </f7-list>
      <f7-block-title> 是否需特殊工具（防火、防爆、具漏電斷路功能之工具） </f7-block-title>
      <f7-list form>
        <f7-list-item radio name="my-radio" value="1" title="是" checked></f7-list-item>
        <li class="align-top">
      <div class="item-content">
        <div class="item-media"><i class="icon f7-icons">chat</i></div>
        <div class="item-inner">
          <div class="item-title label">如是，請寫明</div>
          <div class="item-input">
            <textarea></textarea>
          </div>
        </div>
      </div>
    </li>
        <f7-list-item radio name="my-radio" value="2" title="否"></f7-list-item>       
      </f7-list>
      <f7-block-title> 七、呼吸防護具 </f7-block-title>
    <f7-block-title> 是否置備合格之呼吸防護具 </f7-block-title>
      <f7-list form>
        <f7-list-item radio name="my-radio" value="1" title="是" checked></f7-list-item>
        <f7-list-item radio name="my-radio" value="2" title="否"></f7-list-item>       
      </f7-list>
      <f7-block-title> 是否需配戴呼吸防護具（供氣式呼吸防護具） </f7-block-title>
      <f7-list form>
        <f7-list-item radio name="my-radio" value="1" title="是" checked></f7-list-item>
        <f7-list-item radio name="my-radio" value="2" title="否"></f7-list-item>       
      </f7-list>
      <f7-block-title> 佩戴呼吸防護具是否可通過入口（絕不可因入口狹窄先進入後才配戴） </f7-block-title>
      <f7-list form>
        <f7-list-item radio name="my-radio" value="1" title="是" checked></f7-list-item>
        <f7-list-item radio name="my-radio" value="2" title="否"></f7-list-item>       
      </f7-list>
      <f7-block-title> 八、救援設備 </f7-block-title>
    <f7-block-title> 於深水井上方設置1條救生母索，供監測人員使用 </f7-block-title>
      <f7-list form>
        <f7-list-item radio name="my-radio" value="1" title="是" checked></f7-list-item>
        <f7-list-item radio name="my-radio" value="2" title="否"></f7-list-item>       
      </f7-list>
      <f7-block-title> 局限空間作業人員是否佩戴背負式安全帶加捲揚式防墜器 </f7-block-title>
      <f7-list form>
        <f7-list-item radio name="my-radio" value="1" title="是" checked></f7-list-item>
        <f7-list-item radio name="my-radio" value="2" title="否"></f7-list-item>       
      </f7-list>
      <f7-block-title> 限空間作業人員是否佩戴四用氣體偵測器 </f7-block-title>
      <f7-list form>
        <f7-list-item radio name="my-radio" value="1" title="是" checked></f7-list-item>
        <f7-list-item radio name="my-radio" value="2" title="否"></f7-list-item>       
      </f7-list>
      <f7-block-title> 九、教育訓練 </f7-block-title>
    <f7-block-title> 是否已受過如何使用呼吸防護具的訓練 </f7-block-title>
      <f7-list form>
        <f7-list-item radio name="my-radio" value="1" title="是" checked></f7-list-item>
        <f7-list-item radio name="my-radio" value="2" title="否"></f7-list-item>       
      </f7-list>
      <f7-block-title> 是否有已受過急救/CPR訓練之人員在現場 </f7-block-title>
      <f7-list form>
        <f7-list-item radio name="my-radio" value="1" title="是" checked></f7-list-item>
        <f7-list-item radio name="my-radio" value="2" title="否"></f7-list-item>       
      </f7-list>
      <f7-block-title> 施工人員是否受過局空間作業訓練 </f7-block-title>
      <f7-list form>
        <f7-list-item radio name="my-radio" value="1" title="是" checked></f7-list-item>
        <f7-list-item radio name="my-radio" value="2" title="否"></f7-list-item>       
      </f7-list>
       <f7-block-title> 十、監視/搶救 </f7-block-title>
    <f7-block-title> 是否有場外監視人員進行全程監視及通訊工作 </f7-block-title>
      <f7-list form>
        <f7-list-item radio name="my-radio" value="1" title="是" checked></f7-list-item>
        <f7-list-item radio name="my-radio" value="2" title="否"></f7-list-item>       
      </f7-list>
      <f7-block-title> 監視人員是否可全程監視及進行通訊聯繫 </f7-block-title>
      <f7-list form>
        <f7-list-item radio name="my-radio" value="1" title="是" checked></f7-list-item>
        <f7-list-item radio name="my-radio" value="2" title="否"></f7-list-item>       
      </f7-list>
      <f7-block-title> 監視人員是否受過搶救訓練 </f7-block-title>
      <f7-list form>
        <f7-list-item radio name="my-radio" value="1" title="是" checked></f7-list-item>
        <f7-list-item radio name="my-radio" value="2" title="否"></f7-list-item>       
      </f7-list>
     <f7-block-title> 是否設置搶救人員裝置（救生母索、人員固定擔架） </f7-block-title>
      <f7-list form>
        <f7-list-item radio name="my-radio" value="1" title="是" checked></f7-list-item>
        <f7-list-item radio name="my-radio" value="2" title="否"></f7-list-item>       
      </f7-list>
      <f7-block-title> 是否規劃整個單位之緊急應變程序 </f7-block-title>
      <f7-list form>
        <f7-list-item radio name="my-radio" value="1" title="是" checked></f7-list-item>
        <f7-list-item radio name="my-radio" value="2" title="否"></f7-list-item>       
      </f7-list>
      <f7-block-title> 是否熟知緊急應變程序 </f7-block-title>
      <f7-list form>
        <f7-list-item radio name="my-radio" value="1" title="是" checked></f7-list-item>
        <f7-list-item radio name="my-radio" value="2" title="否"></f7-list-item>       
      </f7-list>
      <f7-block-title> 意外發生時是否知道如何通告及通告對象為為何 </f7-block-title>
      <f7-list form>
        <f7-list-item radio name="my-radio" value="1" title="是" checked></f7-list-item>
        <f7-list-item radio name="my-radio" value="2" title="否"></f7-list-item>       
      </f7-list>
    </f7-block>
    </f7-tab>

    <!-- tab 2-->
    <f7-tab id="tab2">
          <f7-block class="close">
          tab 2
          
          </f7-block>
    </f7-tab>
    </f7-tabs>
  </f7-page>
</template>

<script>
import Loader from '../loader/loader';

export default {
  data: function () {
    return {
     
    }
  },
  computed: {
    id () {
      return this.$store.state.workOrderId;
    },
    order () {
      return this.$store.state.selectedWorkOrder;
    }
  },
  methods:{
    updateWorkOrder (name, data) {
      const payload = {
        name: name,
        data: data
      };
      console.log (payload.name, payload.data)  
      // this.$store.commit ('updateSelectedWorkOrder', payload);
    }
  },
  mounted() {
  }
}
</script>
<style lang="sass" scoped >
.content-block.close{
  margin:60px 0;
}
</style>