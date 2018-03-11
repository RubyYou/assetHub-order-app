<template>
   <f7-page data-page="self-check">
    <f7-navbar >
      <f7-nav-left back-link="上一頁" sliding></f7-nav-left>
      <f7-nav-center>作業安全檢查表</f7-nav-center>
      <f7-subnavbar>
        <f7-segmented>
          <f7-button tab-link="#tab1" tab-link-active>挖土機作業安全</f7-button>
          <f7-button tab-link="#tab2">露天開挖作業安全</f7-button>
          <f7-button tab-link="#tab3">混凝土澆置作業安全</f7-button>
          <f7-button tab-link="#tab4">吊掛用具作業安全</f7-button>
          <f7-button tab-link="#tab5">通風作業安全</f7-button>
          <f7-button tab-link="#tab6">施工架(□組立□拆除)作業</f7-button>
          <f7-button tab-link="#tab7">施工架作業每週安全</f7-button>
          <f7-button tab-link="#tab8">缺氧作業安全</f7-button>
          <f7-button tab-link="#tab9">施工爬梯（上下設備）作業安全</f7-button>
          <f7-button tab-link="#tab10">人員搭乘設備</f7-button>

        </f7-segmented>
      </f7-subnavbar>
    </f7-navbar> 

 <f7-tabs>
    <f7-tab id="tab1" tab-active>
    <f7-block class="close">
        <f7-list form>
        <f7-list-item smart-select title="確認履帶鬆緊度適當">
            <select name="check1" v-model="order.check1" 
             @change = "(e) => { updateOrder ('check1', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check1_note"
                    @change = "(e) => { updateOrder ('check1_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
         <f7-list-item smart-select title="挖斗、斗齒、挖斗力壁完好，連結無鬆脫變形">
            <select name="check2" v-model="order.check2" 
             @change = "(e) => { updateOrder ('check2', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check2_note"
                    @change = "(e) => { updateOrder ('check2_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="油壓管良好無漏油">
            <select name="check3" v-model="order.check3" 
             @change = "(e) => { updateOrder ('check3', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check3_note"
                    @change = "(e) => { updateOrder ('check3_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="制動、操作裝置齊全功能正常">
            <select name="check4" v-model="order.check4" 
             @change = "(e) => { updateOrder ('check4', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check4_note"
                    @change = "(e) => { updateOrder ('check4_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="作業範圍高架電線障礙排除或設絕緣保護管套並設專人指揮">
            <select name="check5" v-model="order.check5" 
             @change = "(e) => { updateOrder ('check5', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check5_note"
                    @change = "(e) => { updateOrder ('check5_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="操作室玻璃窗、後視鏡潔淨保持良好視線">
            <select name="check6" v-model="order.check6" 
             @change = "(e) => { updateOrder ('check6', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check6_note"
                    @change = "(e) => { updateOrder ('check6_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="喇叭操作功能正常音量足夠">
            <select name="check7" v-model="order.check7" 
             @change = "(e) => { updateOrder ('check7', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check7_note"
                    @change = "(e) => { updateOrder ('check7_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="照明足夠且正常使用">
            <select name="check8" v-model="order.check8" 
             @change = "(e) => { updateOrder ('check8', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check8_note"
                    @change = "(e) => { updateOrder ('check8_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="挖土、迴旋動作功能是否正常">
            <select name="check9" v-model="order.check9" 
             @change = "(e) => { updateOrder ('check9', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check9_note"
                    @change = "(e) => { updateOrder ('check9_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="機油、燃料油是否足夠且油箱蓋緊閉">
            <select name="check10" v-model="order.check10" 
             @change = "(e) => { updateOrder ('check10', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check10_note"
                    @change = "(e) => { updateOrder ('check10_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="水箱水量是否足夠，引擎溫度是否正常">
            <select name="check11" v-model="order.check11" 
             @change = "(e) => { updateOrder ('check11', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check11_note"
                    @change = "(e) => { updateOrder ('check11_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="確認操作室頂棚關閉防止土石、物體飛落">
            <select name="check12" v-model="order.check12" 
             @change = "(e) => { updateOrder ('check12', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check12_note"
                    @change = "(e) => { updateOrder ('check12_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        
         
        </f7-list>
    </f7-block>
    </f7-tab>

    <!-- tab 2-->
    <f7-tab id="tab2">
      <f7-block class="close">
        <f7-list form>
        <f7-list-item smart-select title="依地質鑽探調查結果擬定開挖計畫">
            <select name="check13" v-model="order.check13" 
             @change = "(e) => { updateOrder ('check13', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check13_note"
                    @change = "(e) => { updateOrder ('check13_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="開挖前應先調查地下管線，並留下位置記號">
            <select name="check14" v-model="order.check14" 
             @change = "(e) => { updateOrder ('check14', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check14_note"
                    @change = "(e) => { updateOrder ('check14_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="開挖作業中應指派專人指揮監督">
            <select name="check15" v-model="order.check15" 
             @change = "(e) => { updateOrder ('check15', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="姓名" :value="order.check15_note"
                    @change = "(e) => { updateOrder ('check15_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="應管制作業勞工與作業無關人員進入作業現場">
            <select name="check16" v-model="order.check16" 
             @change = "(e) => { updateOrder ('check16', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check16_note"
                    @change = "(e) => { updateOrder ('check16_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="對地面水之排洩應隨時加以注意">
            <select name="check17" v-model="order.check17" 
             @change = "(e) => { updateOrder ('check17', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check17_note"
                    @change = "(e) => { updateOrder ('check17_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="開挖週邊設置安全護欄，出土作業時護欄可部分拆卸由專人管制">
            <select name="check18" v-model="order.check18" 
             @change = "(e) => { updateOrder ('check18', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check18_note"
                    @change = "(e) => { updateOrder ('check18_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="開挖四周應設置警告標示">
            <select name="check19" v-model="order.check19" 
             @change = "(e) => { updateOrder ('check19', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check19_note"
                    @change = "(e) => { updateOrder ('check19_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="開挖邊緣每次在暴雨過後，應加以檢查並加強防止滑動及崩塌之措施">
            <select name="check20" v-model="order.check20" 
             @change = "(e) => { updateOrder ('check20', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check20_note"
                    @change = "(e) => { updateOrder ('check20_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="挖出之土方應堆在開挖邊緣至少一公尺之外，施工機械設備不得置放於開挖邊緣">
            <select name="check21" v-model="order.check21" 
             @change = "(e) => { updateOrder ('check21', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check21_note"
                    @change = "(e) => { updateOrder ('check21_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="開挖底部應設置排水措施，隨時排除地面水、地下水">
            <select name="check22" v-model="order.check22" 
             @change = "(e) => { updateOrder ('check22', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check22_note"
                    @change = "(e) => { updateOrder ('check22_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="準備砂袋，以緊急應變，並嚴禁超挖">
            <select name="check23" v-model="order.check23" 
             @change = "(e) => { updateOrder ('check23', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check23_note"
                    @change = "(e) => { updateOrder ('check23_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="開挖深度≧1.5m以上應設置擋土支撐，擋土支撐作業主管需在場監督">
            <select name="check24" v-model="order.check24" 
             @change = "(e) => { updateOrder ('check24', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="姓名" :value="order.check24_note"
                    @change = "(e) => { updateOrder ('check24_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="開挖作業之機械設備及工具應於每日開工前檢查">
            <select name="check25" v-model="order.check25" 
             @change = "(e) => { updateOrder ('check25', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check25_note"
                    @change = "(e) => { updateOrder ('check25_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="挖土機迴轉半徑內，禁止人員進入並派專人從事開挖作業之指揮工作">
            <select name="check26" v-model="order.check26" 
             @change = "(e) => { updateOrder ('check26', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check26_note"
                    @change = "(e) => { updateOrder ('check26_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="機械、車輛之運行路線及進出土石裝卸場所之方法應事前決定並告知勞工">
            <select name="check27" v-model="order.check27" 
             @change = "(e) => { updateOrder ('check27', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check27_note"
                    @change = "(e) => { updateOrder ('check27_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
       
         
         
        </f7-list>
          </f7-block>
    </f7-tab>
<!-- tab 3-->
    <f7-tab id="tab3">
      <f7-block class="close">
        <f7-list form>
        <f7-list-item smart-select title="澆置期間指派領班巡視">
            <select name="check28" v-model="order.check28" 
             @change = "(e) => { updateOrder ('check28', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check28_note"
                    @change = "(e) => { updateOrder ('check28_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
         <f7-list-item smart-select title="禁止勞工乘坐於混凝土澆置桶上">
            <select name="check29" v-model="order.check29" 
             @change = "(e) => { updateOrder ('check29', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check29_note"
                    @change = "(e) => { updateOrder ('check29_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="以起重機具或索道吊運之混凝土桶下方，禁止人員進入">
            <select name="check30" v-model="order.check30" 
             @change = "(e) => { updateOrder ('check30', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check30_note"
                    @change = "(e) => { updateOrder ('check30_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="應指定安全出入口">
            <select name="check31" v-model="order.check31" 
             @change = "(e) => { updateOrder ('check31', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check31_note"
                    @change = "(e) => { updateOrder ('check31_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="拌器及輸送管接頭銜接狀況應良好">
            <select name="check32" v-model="order.check32" 
             @change = "(e) => { updateOrder ('check32', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check32_note"
                    @change = "(e) => { updateOrder ('check32_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="作業時攪拌器攪刀之護蓋不得開啟">
            <select name="check33" v-model="order.check33" 
             @change = "(e) => { updateOrder ('check33', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check33_note"
                    @change = "(e) => { updateOrder ('check33_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
         <f7-list-item smart-select title="容積一立方公尺以上之漏斗之混凝土拌合機，應有清掃裝置與護欄">
            <select name="check34" v-model="order.check34" 
             @change = "(e) => { updateOrder ('check34', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check34_note"
                    @change = "(e) => { updateOrder ('check34_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="未能設置護欄之作業面應架設安全母索，並使勞工佩掛安全帶">
            <select name="check35" v-model="order.check35" 
             @change = "(e) => { updateOrder ('check35', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check35_note"
                    @change = "(e) => { updateOrder ('check35_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="各分電盤應裝設5-30mA、0.1sec即跳脫之電流動作高速型漏電斷路器">
            <select name="check36" v-model="order.check36" 
             @change = "(e) => { updateOrder ('check36', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check36_note"
                    @change = "(e) => { updateOrder ('check36_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="橫越通道或勞工作業之電線應架高或保護">
            <select name="check37" v-model="order.check37" 
             @change = "(e) => { updateOrder ('check37', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check37_note"
                    @change = "(e) => { updateOrder ('check37_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="混凝土壓送車輸送管等有觸及高壓線路之虞時，是否設置絕緣套管並派專人指揮以保持安全距離">
            <select name="check38" v-model="order.check38" 
             @change = "(e) => { updateOrder ('check38', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check38_note"
                    @change = "(e) => { updateOrder ('check38_note', e.target.value)}">
            </f7-input>
        </f7-list-item>


        </f7-list>
          </f7-block>
    </f7-tab>

<!-- tab 4-->
    <f7-tab id="tab4">
      <f7-block class="close">
        <f7-list form>
         <f7-block-title> 吊索 </f7-block-title>
        <f7-list-item smart-select title="鋼索的一燃間有10﹪以上的素線截斷者">
            <select name="check39" v-model="order.check39" 
             @change = "(e) => { updateOrder ('check39', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check39_note"
                    @change = "(e) => { updateOrder ('check39_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="直徑減少達公稱直徑7﹪以上者">
            <select name="check40" v-model="order.check40" 
             @change = "(e) => { updateOrder ('check40', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check40_note"
                    @change = "(e) => { updateOrder ('check40_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="已扭結者">
            <select name="check41" v-model="order.check41" 
             @change = "(e) => { updateOrder ('check41', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check41_note"
                    @change = "(e) => { updateOrder ('check41_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="有顯著變形或腐蝕者">
            <select name="check42" v-model="order.check42" 
             @change = "(e) => { updateOrder ('check42', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check42_note"
                    @change = "(e) => { updateOrder ('check42_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="末端結頭部分異常者">
            <select name="check43" v-model="order.check43" 
             @change = "(e) => { updateOrder ('check43', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check43_note"
                    @change = "(e) => { updateOrder ('check43_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
         <f7-list-item smart-select title="鋼索套有裂紋產生">
            <select name="check44" v-model="order.check44" 
             @change = "(e) => { updateOrder ('check44', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check44_note"
                    @change = "(e) => { updateOrder ('check44_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
         <f7-list-item smart-select title="鋼索套有變形情形，並壓迫且傷及鋼索">
            <select name="check45" v-model="order.check45" 
             @change = "(e) => { updateOrder ('check45', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check45_note"
                    @change = "(e) => { updateOrder ('check45_note', e.target.value)}">
            </f7-input>
        </f7-list-item>

         <f7-block-title> 吊鏈 </f7-block-title>
         <f7-block-title>  </f7-block-title>
         <f7-list-item smart-select title="延伸長度超過5﹪以上">
            <select name="check46" v-model="order.check45" 
             @change = "(e) => { updateOrder ('check46', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check46_note"
                    @change = "(e) => { updateOrder ('check46_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="環的斷面直徑減少10﹪以上">
            <select name="check46" v-model="order.check46" 
             @change = "(e) => { updateOrder ('check46', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check46_note"
                    @change = "(e) => { updateOrder ('check46_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
         <f7-list-item smart-select title="有無龜裂">
            <select name="check47" v-model="order.check47" 
             @change = "(e) => { updateOrder ('check47', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check47_note"
                    @change = "(e) => { updateOrder ('check47_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="有無顯著變形">
            <select name="check48" v-model="order.check48" 
             @change = "(e) => { updateOrder ('check48', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check48_note"
                    @change = "(e) => { updateOrder ('check48_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-block-title> 吊勾、吊環 </f7-block-title>
        <f7-list-item smart-select title="有無顯著變形">
            <select name="check49" v-model="order.check49" 
             @change = "(e) => { updateOrder ('check49', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check49_note"
                    @change = "(e) => { updateOrder ('check49_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="有無顯著磨耗">
            <select name="check50" v-model="order.check50" 
             @change = "(e) => { updateOrder ('check50', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check50_note"
                    @change = "(e) => { updateOrder ('check50_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="有無龜裂情形">
            <select name="check51" v-model="order.check51" 
             @change = "(e) => { updateOrder ('check51', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check51_note"
                    @change = "(e) => { updateOrder ('check51_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="防滑舌片有無正常">
            <select name="check52" v-model="order.check52" 
             @change = "(e) => { updateOrder ('check52', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check52_note"
                    @change = "(e) => { updateOrder ('check52_note', e.target.value)}">
            </f7-input>
        </f7-list-item>


          
         
        </f7-list>
          </f7-block>
    </f7-tab>

<!-- tab 5-->
    <f7-tab id="tab5">
      <f7-block class="close">
        <f7-list form>
        <f7-block-title> 一般規定 </f7-block-title>
         <f7-list-item smart-select title="勞工進入集水井從事作業前，是否先行通風30分鐘">
            <select name="check53" v-model="order.check53" 
             @change = "(e) => { updateOrder ('check53', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check53_note"
                    @change = "(e) => { updateOrder ('check53_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
         <f7-list-item smart-select title="是否依規定施作現場，有足夠自然通風或機械通風">
            <select name="check54" v-model="order.check54" 
             @change = "(e) => { updateOrder ('check54', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check54_note"
                    @change = "(e) => { updateOrder ('check54_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="作業前測試氧氣濃度未達到18％時是否禁止勞工作業">
            <select name="check55" v-model="order.check55" 
             @change = "(e) => { updateOrder ('check55', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check55_note"
                    @change = "(e) => { updateOrder ('check55_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="作業前測試有害氣體濃度達危害值時是否禁止勞工作業">
            <select name="check56" v-model="order.check56" 
             @change = "(e) => { updateOrder ('check56', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check56_note"
                    @change = "(e) => { updateOrder ('check56_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
         <f7-block-title>機具設備 </f7-block-title>
         <f7-list-item smart-select title="機械馬達是否設置避免人員、廢物吸入之防護罩">
            <select name="check56" v-model="order.check56" 
             @change = "(e) => { updateOrder ('check56', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check56_note"
                    @change = "(e) => { updateOrder ('check56_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="機械四周是否設置護欄及警示標誌">
            <select name="check57" v-model="order.check57" 
             @change = "(e) => { updateOrder ('check57', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check57_note"
                    @change = "(e) => { updateOrder ('check57_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="通風管是否依據集水井開挖深度延伸，而依序通風管口位置(進、出)設置">
            <select name="check58" v-model="order.check58" 
             @change = "(e) => { updateOrder ('check58', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check58_note"
                    @change = "(e) => { updateOrder ('check58_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
         <f7-block-title> 安全管理 </f7-block-title>
         <f7-list-item smart-select title="缺氧作業主管是否在現場，監督勞工作業">
            <select name="check59" v-model="order.check59" 
             @change = "(e) => { updateOrder ('check59', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check59_note"
                    @change = "(e) => { updateOrder ('check59_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="是否指派專人每日檢查並負責通風設備開、關及管制">
            <select name="check60" v-model="order.check60" 
             @change = "(e) => { updateOrder ('check60', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check60_note"
                    @change = "(e) => { updateOrder ('check60_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="作業期間於井口設置1位監視人員全程監視開挖人員作業情形">
            <select name="check61" v-model="order.check61" 
             @change = "(e) => { updateOrder ('check61', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check61_note"
                    @change = "(e) => { updateOrder ('check61_note', e.target.value)}">
            </f7-input>
        </f7-list-item>

         <f7-block-title> 災害防止 </f7-block-title>
        <f7-list-item smart-select title="收工後是否指派專人巡視，確認無人員施工在關閉通風設備">
            <select name="check62" v-model="order.check62" 
             @change = "(e) => { updateOrder ('check62', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check62_note"
                    @change = "(e) => { updateOrder ('check62_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="機械通風設備，電線是否架高，有無破皮現象">
            <select name="check63" v-model="order.check63" 
             @change = "(e) => { updateOrder ('check63', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check63_note"
                    @change = "(e) => { updateOrder ('check63_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="通風設備故障時，有安全之虞，是否立即停止作業，並疏散到通風良好處">
            <select name="check64" v-model="order.check64" 
             @change = "(e) => { updateOrder ('check64', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check64_note"
                    @change = "(e) => { updateOrder ('check64_note', e.target.value)}">
            </f7-input>
        </f7-list-item>
        <f7-list-item smart-select title="於集水井工程，支撐架每層設置1條救生母索，供監測人員使用">
            <select name="check65" v-model="order.check65" 
             @change = "(e) => { updateOrder ('check65', e.target.value)}">
              <option value="符合">符合</option>
              <option value="不符合">不符合</option>
            </select>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="textarea" placeholder="改善措施內容" :value="order.check65_note"
                    @change = "(e) => { updateOrder ('check65_note', e.target.value)}">
            </f7-input>
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
      return this.$store.state.safeOrder;
    }
  },
  methods:{
    updateOrder (name, data) {
      const payload = {
        name: name,
        data: data
      };
      console.log (payload.name, payload.data)  
      this.$store.commit ('updateSafeOrder', payload);
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