<template>
  <f7-page class="item">
    <f7-navbar >
      <f7-nav-left back-link="Back" sliding></f7-nav-left>
      <f7-nav-center>{{task.title}}</f7-nav-center>
      <f7-nav-right>
      <!-- :href="'/carehub/edit/'+task.key" -->
        <f7-link ref="editText" >編輯</f7-link>
      </f7-nav-right>
    </f7-navbar> 
    <f7-block>
      <p> 任務狀態 </p>
      <div class="progress" >
        <div class="icon">
            <img :src="getImage('start')" />
            <p>開始</p>
        </div>
        <div class="icon">
            <img :src="getImage('pause')" />
            <p>暫停</p>
        </div>
        <div class="icon">
            <img :src="getImage('in progress')" />
            <p>處理中</p>
        </div>
        <div class="icon">
            <img :src="getImage('resolve')" />
            <p>解決</p>
        </div>
      </div>
      <div class="clear" />
      <h3 class="sub-title"> 細節 </h3>
      <p> {{task.details}}</p>
      <hr />
      <div class="content-item">
          <h4>工單類型 </h4>
          <h5 class="red">{{task.type}}</h5>
      </div>
      <div class="content-item">
          <h4>結束時間</h4>
          <h5>{{task.endTime}}</h5>
      </div>
      <div class="content-item">
          <h4>狀態更新</h4>
          <h5>{{task.endTime}}</h5>
      </div>
      <div class="content-item">
          <h4>建立人</h4>
          <h5 class="red">{{task.supervisor}}</h5>
      </div>
      <div class="content-item">
          <h4>指派人</h4>
          <h5 class="red">{{task.assignee}}</h5>
      </div>
      <div class="content-item">
          <h4>服務地點</h4>
          <h5>{{task.location}}</h5>
      </div>
      <div class="content-item">
          <h4>時間</h4>
          <h5>{{task.hour + ' hours ' + task.minus + ' minus'}}</h5>
      </div>
      <div class="content-item">
          <h4>費用</h4>
          <h5>NTD${{task.cost}}</h5>
      </div>
      <div class="clear"></div>
      <f7-grid >
          <f7-col>
            <f7-button fill color="blue" @click="sign">客戶簽名</f7-button>
          </f7-col>
          <f7-col>
            <f7-button fill color="pink" @click="sign">簽名 </f7-button>
          </f7-col>
        </f7-grid>
      <f7-label>備忘錄</f7-label>
     <textarea row="8" placeholder="note"></textarea>
    </f7-block>
  </f7-page>
</template>

<script>
import Utils from '../utils/utils';

export default {
  computed: {
    order () {
      return this.$store.state.selectedWorkOrder;
    }
  },
  methods:{
    toggleEdit(){

    },
    sign (){

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

      if (imgName == this.task.progress) {
        src += '-r.png';
      } else {
        src += '.png';
      }

      return 'img/' + src;
    }
  },
  mounted(){
    console.log (this.$store.state.selectedCareHubTask);
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

textarea{
  width:100%;
  height:40px;
}

.row, .label{
  margin-top:20px;
}
</style>