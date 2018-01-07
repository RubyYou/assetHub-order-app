<template>
  <f7-page data-page="workorder-edit">

    <f7-navbar >
      <f7-nav-left back-link="Back" sliding></f7-nav-left>
      <f7-nav-center>{{order.title}}</f7-nav-center>
    </f7-navbar> 

    <f7-block>
      <p> 任務狀態 </p>
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
          <f7-input type="text" placeholder="name" :value="order.title"/>
        </f7-list-item>

        <f7-list-item>
          <f7-label>細節</f7-label>
          <f7-input type="textarea" placeholder="fill out detail" :value="order.details"></f7-input>
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
              <input type="range" min="0" max="100" :value="order.progressTime" step="1"
               @change="(e) => { updateWorkOrder ('progressTime', e.target.value)}"
               />
            </div>
          </div>
        </f7-list-item>

        <f7-list-item>
          <f7-label>結束時間</f7-label>
          <f7-input type="text" :value="order.endTime"/>
        </f7-list-item>

        <f7-list-item>
          <f7-label>狀態更新</f7-label>
          <f7-input type="text" :value="order.lastUpdated"/>
        </f7-list-item>

        <f7-list-item>
          <f7-label>建立人</f7-label>
          <f7-input type="text" :value="order.supervisor"/>
        </f7-list-item>

        <f7-list-item>
          <f7-label>指派人</f7-label>
          <f7-input type="text" :value="order.assignee"/>
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
          <f7-input type="text" :value="order.hour + ' 時 ' + order.minus + ' 分'"/>
        </f7-list-item>
      </f7-list>
      
      <f7-block-title>結案簽收</f7-block-title>
      <f7-block>
        <f7-buttons>
          <f7-button @click="sign (order.customerSign)">客戶簽名</f7-button>
          <f7-button @click="sign (order.selfSign)">簽名</f7-button>
        </f7-buttons>
      </f7-block>

      <f7-block-title>備忘錄</f7-block-title>
      <f7-block>
        <f7-input type="textarea" placeholder="fill out detail" :value="order.note"></f7-input>
      </f7-block>
    </f7-block>
    <f7-popup>
      <canvas id="canvas"> </canvas>
    </f7-popup>
  </f7-page>
</template>

<script>
import Utils from '../utils/utils';
import DrawApp from '../components/draw';

export default {
  data: function () {
    return {
      // TODO: move to DB as common config
      locations : [
        "B1", "B2", "B3", "1F", "2F", "3F", "4F", "5F", 
        "6F", "7F", "8F", "9F", "10F", "11F", "12F", "13F",
        "14F", "15F", "16F", "17F", "18F", "19F"
      ],
      signColor : "#000000"
    }
  },
  computed: {
    order () {
      return this.$store.state.selectedWorkOrder;
    }
  },
  methods:{
    sign (data) {
      let drawData = data;

      console.assert (data !== undefined || typeof data === "object");
      console.assert (Array.isArray (data.clickX) && Array.isArray (data.clickY) && Array.isArray (data.clickDrag));
      
      this.sign = new DrawApp ();

      if (data !== undefined) 
      {
        this.sign.setDrawing (this.signColor, data.clickX, data.clickY, data.clickDrag);
      }
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
    }
  },
  mounted(){
    console.log (this.$store.state.selectedWorkOrder, this.order.location, this.order.type);
  }
}
</script>
<style lang="sass" scoped >
p{
  text-align:center;
}
h4{
  font-size: 16px;
  color:black;
}
h5{
  font-size: 14px;
  margin: 0;
}
.red{
  color:#ff6868;
}
.progress{
  width:100%;
  height:60px;
}
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
.sub-title{
  background: #ff6868;
  padding: 10px;
  width: 80%;
  margin: 10px auto;
  text-align: center;
  color: white;
}
.content-item{
  width:50%;
  float:left;
  min-height:103px;
  text-align: center;
}
.content-block{
  margin:20px 0;
}

/* fix issue for slider */
.range-slider input[type="range"]::-webkit-slider-thumb { 
    border: 1px solid silver;
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}
</style>