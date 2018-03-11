<template>
   <f7-page data-page="self-check">
    <f7-navbar >
      <f7-nav-left back-link="上一頁" sliding></f7-nav-left>
      <f7-nav-center>一般車輛作業檢點表</f7-nav-center>
      <f7-subnavbar>
        <f7-segmented>
          <f7-button tab-link="#tab1" tab-link-active>一般車輛每日作業檢點表</f7-button>
          <f7-button tab-link="#tab2">一般車輛安全自動檢查表</f7-button>
          <f7-button tab-link="#tab3">車輛系營建機械每月安全自動檢查表</f7-button>
        </f7-segmented>
      </f7-subnavbar>
    </f7-navbar> 

 <f7-tabs>
    <f7-tab id="tab1" tab-active>
    <f7-block class="close">
        <f7-list form>
        <f7-list-item smart-select title="制動器、連結裝置、各種儀器之有無異常">
            <select name="sefcheck1" v-model="order.sefcheck1" 
             @change = "(e) => { updateCheckOrder ('sefcheck1', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item smart-select title="蓄電池、配線、控制裝置之有無異常">
            <select name="sefcheck2" v-model="order.sefcheck2" 
             @change = "(e) => { updateCheckOrder ('sefcheck2', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item smart-select title="機油界線內、引擎系統有無漏油、加速腳踏板無卡住">
            <select name="sefcheck3" v-model="order.sefcheck3" 
             @change = "(e) => { updateCheckOrder ('sefcheck3', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item smart-select title="引擎發動後有無異聲、排煙淡色">
            <select name="sefcheck4" v-model="order.sefcheck4" 
             @change = "(e) => { updateCheckOrder ('sefcheck4', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item smart-select title="變速油界線內，變速箱系統有無漏油、起動後無異聲">
            <select name="sefcheck5" v-model="order.sefcheck5" 
             @change = "(e) => { updateCheckOrder ('sefcheck5', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
           <f7-list-item smart-select title="手剎車、腳剎車性能是否良好">
            <select name="sefcheck6" v-model="order.sefcheck6" 
             @change = "(e) => { updateCheckOrder ('sefcheck6', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item smart-select title="剎車油量界線內，剎車系統有無漏油">
            <select name="sefcheck7" v-model="order.sefcheck7" 
             @change = "(e) => { updateCheckOrder ('sefcheck7', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
           <f7-list-item smart-select title="離合器踏板是否正常">
            <select name="sefcheck8" v-model="order.sefcheck8" 
             @change = "(e) => { updateCheckOrder ('sefcheck8', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
           <f7-list-item smart-select title="離合器作用是否正常、無異聲">
            <select name="sefcheck9" v-model="order.sefcheck9" 
             @change = "(e) => { updateCheckOrder ('sefcheck9', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item smart-select title="方向盤游隙允差是否在範圍內">
            <select name="sefcheck10" v-model="order.sefcheck10" 
             @change = "(e) => { updateCheckOrder ('sefcheck10', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item smart-select title="轉像拉桿接頭有無鬆動，軸承無異聲">
            <select name="sefcheck11" v-model="order.sefcheck11" 
             @change = "(e) => { updateCheckOrder ('sefcheck11', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
           <f7-list-item smart-select title="喇叭正常、前後照明及警示燈具正常">
            <select name="sefcheck12" v-model="order.sefcheck12" 
             @change = "(e) => { updateCheckOrder ('sefcheck12', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item smart-select title="電瓶水量在允差刻度間、通氣孔應通暢">
            <select name="sefcheck13" v-model="order.sefcheck13" 
             @change = "(e) => { updateCheckOrder ('sefcheck13', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item smart-select title="電瓶接頭有無鬆動">
            <select name="sefcheck14" v-model="order.sefcheck14" 
             @change = "(e) => { updateCheckOrder ('sefcheck14', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item smart-select title="燃油箱油量足夠、油箱蓋通氣孔暢通">
            <select name="sefcheck15" v-model="order.sefcheck15" 
             @change = "(e) => { updateCheckOrder ('sefcheck15', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item smart-select title="油箱牢固有無洩漏">
            <select name="sefcheck16" v-model="order.sefcheck16" 
             @change = "(e) => { updateCheckOrder ('sefcheck16', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item smart-select title="水量足夠、水箱與管路有無漏水">
            <select name="sefcheck17" v-model="order.sefcheck17" 
             @change = "(e) => { updateCheckOrder ('sefcheck17', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item smart-select title="胎面有無釘刺物、無刮裂痕">
            <select name="sefcheck18" v-model="order.sefcheck18" 
             @change = "(e) => { updateCheckOrder ('sefcheck18', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item smart-select title="胎面花紋厚度是否在標準內">
            <select name="sefcheck19" v-model="order.sefcheck19" 
             @change = "(e) => { updateCheckOrder ('sefcheck19', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item smart-select title="鋼圈有無變形">
            <select name="sefcheck20" v-model="order.sefcheck19" 
             @change = "(e) => { updateCheckOrder ('sefcheck20', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item smart-select title="固定螺絲有無變形、鬆動">
            <select name="sefcheck21" v-model="order.sefcheck21" 
             @change = "(e) => { updateCheckOrder ('sefcheck21', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>

         
        </f7-list>
    </f7-block>
    </f7-tab>

    <!-- tab 2-->
    <f7-tab id="tab2">
      <f7-block class="close">
        <f7-list form>
          <f7-list-item smart-select title="制動器、離合器操作裝置是否正常">
            <select name="selfcheck22" v-model="order.selfcheck22" 
             @change = "(e) => { updateCheckOrder ('selfcheck22', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>  
          <f7-list-item smart-select title="方向盤裝置是否穩定靈活">
            <select name="selfcheck23" v-model="order. selfcheck23" 
             @change = "(e) => { updateCheckOrder (' selfcheck23', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item smart-select title="剎車器是否能停止不致滑動">
            <select name="selfcheck24" v-model="order.selfcheck24" 
             @change = "(e) => { updateCheckOrder ('selfcheck24', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>

          <f7-list-item smart-select title="配線開關是否完整">
            <select name="selfcheck25" v-model="order.selfcheck25" 
             @change = "(e) => { updateCheckOrder ('selfcheck25', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item smart-select title="主軸軸承、引擎性能是否正常">
            <select name="selfcheck26" v-model="order.selfcheck26" 
             @change = "(e) => { updateCheckOrder ('selfcheck26', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item smart-select title="頂蓬及桅桿是否牢固">
            <select name="selfcheck27" v-model="order.selfcheck27" 
             @change = "(e) => { updateCheckOrder ('selfcheck27', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item smart-select title="外殼是否完整">
            <select name="selfcheck28:" v-model="order.selfcheck28" 
             @change = "(e) => { updateCheckOrder ('selfcheck28:', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item smart-select title="胎壓是否足夠">
            <select name="selfcheck29" v-model="order.selfcheck29" 
             @change = "(e) => { updateCheckOrder ('selfcheck29', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item smart-select title="各項附屬螺栓是否齊全">
            <select name="selfcheck30" v-model="order.selfcheck30" 
             @change = "(e) => { updateCheckOrder ('selfcheck30', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item smart-select title="電瓶、水箱是否正常">
            <select name="selfcheck31" v-model="order.selfcheck31" 
             @change = "(e) => { updateCheckOrder ('selfcheck31', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item smart-select title="吊升旋轉行走動作試驗">
            <select name="selfcheck32" v-model="order.selfcheck32" 
             @change = "(e) => { updateCheckOrder ('selfcheck32', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
         
        </f7-list>
          </f7-block>
    </f7-tab>
<!-- tab 3-->
    <f7-tab id="tab3">
      <f7-block class="close">
        <f7-list form>
          <f7-list-item smart-select title="駕駛人員精神狀況是否良好">
            <select name="selfcheck33" v-model="order.selfcheck33" 
             @change = "(e) => { updateCheckOrder ('selfcheck33', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>  
          <f7-list-item smart-select title="機械操作時，需有警戒、指揮人員、避免發生意外">
            <select name="selfcheck34" v-model="order. selfcheck34" 
             @change = "(e) => { updateCheckOrder (' selfcheck34', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item smart-select title="地面是否平整、強固、避免機械翻覆">
            <select name="selfcheck35" v-model="order.selfcheck35" 
             @change = "(e) => { updateCheckOrder ('selfcheck35', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>

          <f7-list-item smart-select title="夜間作業時，照明需確實足夠">
            <select name="selfcheck36" v-model="order.selfcheck36" 
             @change = "(e) => { updateCheckOrder ('selfcheck36', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item smart-select title="施工現場需備有緊急聯絡電話清單">
            <select name="selfcheck37" v-model="order.selfcheck37" 
             @change = "(e) => { updateCheckOrder ('selfcheck37', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item smart-select title="掛吊、運載、搬運時需確實，避免鬆脫">
            <select name="selfcheck38" v-model="order.selfcheck38" 
             @change = "(e) => { updateCheckOrder ('selfcheck38', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item smart-select title="電氣作業，需由專業人員施作">
            <select name="selfcheck39:" v-model="order.selfcheck39" 
             @change = "(e) => { updateCheckOrder ('selfcheck39:', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item smart-select title="制動器操作裝置是否正常">
            <select name="selfcheck40" v-model="order.selfcheck40" 
             @change = "(e) => { updateCheckOrder ('selfcheck40', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item smart-select title="離合器操作裝置是否正常">
            <select name="selfcheck41" v-model="order.selfcheck41" 
             @change = "(e) => { updateCheckOrder ('selfcheck41', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item smart-select title="操作裝置是否齊全">
            <select name="selfcheck42" v-model="order.selfcheck42" 
             @change = "(e) => { updateCheckOrder ('selfcheck42', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item smart-select title="作業裝置是否適當">
            <select name="selfcheck43" v-model="order.selfcheck43" 
             @change = "(e) => { updateCheckOrder ('selfcheck43', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item smart-select title="鋼索、鏈有無損傷斷裂">
            <select name="selfcheck44" v-model="order.selfcheck44" 
             @change = "(e) => { updateCheckOrder ('selfcheck44', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item smart-select title="吊斗有無損傷斷裂">
            <select name="selfcheck45" v-model="order.selfcheck45" 
             @change = "(e) => { updateCheckOrder ('selfcheck45', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
         
        </f7-list>
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
    order () {
      return this.$store.state.checkOrder;
    }
  },
  methods:{
    updateCheckOrder (name, data) {
      const payload = {
        name: name,
        data: data
      };
      console.log (payload.name, payload.data)  
      this.$store.commit ('updateCheckOrder', payload);
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