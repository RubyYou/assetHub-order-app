<template>
  <f7-page data-page="workorder-edit">

    <f7-navbar >
      <f7-nav-left back-link="Back" sliding></f7-nav-left>
      <f7-nav-center>{{order.title}}</f7-nav-center>
    </f7-navbar> 

    <f7-block>
      <f7-block-title> 任務狀態 </f7-block-title>
      <br/>
      <div class="progress" >
        <div class="icon" @click="updateWorkOrder ('progress', 'start')">
            <img :src="getImage('start')" />
            <p>開始</p>
        </div>
        <div class="icon" @click="updateWorkOrder ('progress', 'pause')">
            <img :src="getImage('pause')" />
            <p>暫停</p>
        </div>
        <div class="icon" @click="updateWorkOrder ('progress', 'in progress')">
            <img :src="getImage('in progress')" />
            <p>處理中</p>
        </div>
        <div class="icon" @click="updateWorkOrder ('progress', 'resolve')">
            <img :src="getImage('resolve')" />
            <p>解決</p>
        </div>
      </div>
      <div class="clear" />

      <f7-block-title> 工單明細 </f7-block-title>
      <f7-list form>
        <f7-list-item>
          <f7-label>工作名稱</f7-label>
          <f7-input type="text" placeholder="name" :value="order.title"
                    @change = "(e) => { updateWorkOrder ('title', e.target.value)}" />
        </f7-list-item>

        <f7-list-item>
          <f7-label>細節</f7-label>
          <f7-input type="textarea" placeholder="fill out detail" :value="order.details"
                    @change = "(e) => { updateWorkOrder ('details', e.target.value)}"
          ></f7-input>
        </f7-list-item>

        <f7-list-item smart-select title="工單類型">
          <select name="type" v-model="order.type" 
                  @change="(e) => { updateWorkOrder ('type', e.target.value)}">
            <option value="故障修繕">故障修繕</option>
            <option value="設備異常">設備異常</option>
            <option value="定期維護">定期維護</option>
            <option value="客戶通報">客戶通報</option>
          </select>
        </f7-list-item>

        <f7-list-item smart-select title="維護類型">
          <select name="type" v-model="order.maintainType" 
                  @change="(e) => { updateWorkOrder ('maintainType', e.target.value)}">
            <option value="yearly">每年維護</option>
            <option value="halfYear">半年期維護</option>
            <option value="monthly">月定期維護</option>
            <option value="daily">日常巡檢</option>
            <option value="once">一次性維護</option>
          </select>
        </f7-list-item>

        <f7-list-item>
          <f7-label>進度: {{order.progressTime}} %</f7-label>
          <div class="item-input">
            <div class="range-slider">
              <input type="range" min="0" max="100" :value="order.progressTime" step="10"
               @change = "(e) => { updateWorkOrder ('progressTime', e.target.value)}"
               />
            </div>
          </div>
        </f7-list-item>

        <f7-list-item>
          <f7-label>結束時間</f7-label>
          <f7-input type="text" :value="new Date(order.endTime).toString()"
                    @change = "(e) => { updateWorkOrder ('endTime', e.target.value)}" />
        </f7-list-item>

        <f7-list-item>
          <f7-label>狀態更新</f7-label>
          <f7-input type="text" :value="new Date(order.lastUpdated).toString()" readOnly />
        </f7-list-item>

        <f7-list-item>
          <f7-label>建立人</f7-label>
          <f7-input type="text" :value="order.supervisor" 
                    @change = "(e) => { updateWorkOrder ('supervisor', e.target.value)}" />
        </f7-list-item>

        <f7-list-item>
          <f7-label>指派人</f7-label>
          <f7-input type="text" :value="order.assignee" 
                    @change = "(e) => { updateWorkOrder ('assignee', e.target.value)}" />
        </f7-list-item>

        <f7-list-item smart-select title="服務地點">
          <select name="location" v-model="order.location" 
                  @change="(e) => { updateWorkOrder ('location', e.target.value)}">
            <option v-for="place in locations" 
                    :value="place" > {{place}} </option>
          </select>
        </f7-list-item>

        <f7-list-item>
          <f7-label>時間</f7-label>
          <f7-input type="text" :value="order.hour + ' 時 ' + order.minus + ' 分'" 
                    @change = "(e) => { updateWorkOrder ('assignee', e.target.value)}" />
        </f7-list-item>
      </f7-list>
      
      <f7-block-title>結案簽收</f7-block-title>
      <f7-block>
        <f7-buttons>
          <f7-button @click = "sign ('customerSign', order.customerSign)" class="popup-open">客戶簽名</f7-button>
          <f7-button @click = "sign ('selfSign', order.selfSign)" class="popup-open">簽名</f7-button>
        </f7-buttons>
      </f7-block>

      <f7-block-title>備忘錄</f7-block-title>
      <f7-list form>
        <f7-list-item>
          <f7-input type="textarea" placeholder="fill out detail" :value="order.note"
                    @change = "(e) => { updateWorkOrder ('note', e.target.value)}">
          </f7-input>
        </f7-list-item>
      </f7-list>

      <f7-block>
        <f7-buttons v-if="order.key !== 0">
          <f7-button color = "pink" fill @click = "saveWorkOrder">儲存</f7-button>
          <f7-button color = "lightblue" fill @click = "deleteWorkOrder">刪除</f7-button>
        </f7-buttons>
        <f7-button v-else color="red" @click = "saveWorkOrder">新建工作</f7-button>
      </f7-block>

    </f7-block>
    <f7-popup class="sign">
      <canvas id="canvas" > </canvas>
      <f7-buttons>
        <f7-button @click = "cleanDraw">清除</f7-button>
        <f7-button @click = "closePopup" class="popup-close">關閉簽名</f7-button>
      </f7-buttons>
    </f7-popup>
  </f7-page>
</template>

<script>
import Utils from '../utils/utils';
import DrawApp from '../components/draw';
import Loader from '../loader/loader';

export default {
  data: function () {
    return {
      // TODO: move to DB as common config
      locations : [
        "B1", "B2", "B3", "1F", "2F", "3F", "4F", "5F", 
        "6F", "7F", "8F", "9F", "10F", "11F", "12F", "13F",
        "14F", "15F", "16F", "17F", "18F", "19F"
      ],
      signColor : "#000000",
      signType : "selfSign",
      mode: 'new'
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
    getImage (imgName) {
      let src = '';

      switch (imgName)
      {
        case "start":
          src = "start";
          break;
        case "pause":
          src = "pause";
          break;
        case "in progress":
          src = "progress";
          break;
        case "resolve":
          src = "end";
          break;
      }

      if (imgName == this.order.progress) {
        src += '-r.png';
      } else {
        src += '.png';
      }

      return 'img/' + src;
    },
    updateWorkOrder (name, data) {
      const payload = {
        name: name,
        data: data
      };

      this.$store.commit ('updateSelectedWorkOrder', payload);
    },
    cleanDraw () {
      this.drawApp.clean ();
    },
    closePopup () {
      this.drawApp.enablePant (false);

      const payload = {
        name: this.signType,
        data: this.drawApp.getDrawData ()
      };

      this.$store.commit ('updateSelectedWorkOrder', payload);
      this.$f7.closeModal('.sign', true);
    },
    dBCallback (string) {
      this.$f7.alert (string, "");
    },
    deleteWorkOrder () {
      this.$f7.confirm ('確定刪除' + this.order.title +'?', "", 
          function (ok) {
              Loader.deleteWorkOrder (this.id, this.dBCallback.bind(this, '刪除成功'));
          }
      );
    },
    saveWorkOrder () {

      let payload = Object.assign (
        {}, this.order, 
        {lastUpdated: new Date ().getTime ()}
      );

      if (payload.key)
      {
        delete payload.key;
      }
      
      if (this.id == 0)
      {
        Loader.addNewWorkOrder (payload, this.dBCallback.bind (this, '新建成功'))
      } else {
        Loader.updateWorkOrder (this.id, payload, this.dBCallback.bind(this, '儲存成功') );
      }
    }
  },
  mounted() {
    const width = window.innerWidth;
    const height = window.innerHeight * 0.8;
    this.drawApp = new DrawApp (width, height);

    console.log (this.$store.state.selectedWorkOrder);
  }
}
</script>
<style lang="sass" scoped >
.icon{
  width:25%;
  display:inline-block;
  float:left;
  text-align:center;

  img{
    width:60px;
    height:60px;
  }
}

/* fix issue for slider on chrome and firefox */
.range-slider input[type="range"]::-webkit-slider-thumb { 
    border: 1px solid silver;
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}
</style>