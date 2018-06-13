<template>
    <f7-page data-page="checkin-timeline" class="timeline">
      <div class="header">
        <p> 今日打卡記錄 </p>
        <f7-button @click="getSubstrackDayData(1)"> < </f7-button>
        <h3 class="title"> {{date}}</h3>
        <f7-button v-if="currentDayIndex > 0" @click="getSubstrackDayData(-1)"> > </f7-button>
      </div>
      <f7-timeline sides>
        <f7-timeline-item
            v-for="history in historys"
            :day = "getTime (history.createTime)"
            :month = "getDate (history.createTime)"
            inner
            title="Item Title"
            :content = "getContent (history)">
        </f7-timeline-item>
      </f7-timeline>
    </f7-page>
</template>

<script>
import moment from "moment";
import { mapState } from "vuex";
import TimeUtils from "../../utils/time-utils"
import { SocketAPI } from '../../apis/index'

const today = TimeUtils.substractDayToDBFormate(0);

export default {
  name: "checkin-timeline",
  props: {
    content: Object,
    dataType: String
  },
  // adding s in the end of word to help iteration
  computed: {
    historys() {
      const cardFrom =
        this.dataType === "staff" ? "staffCheckInHistory" : "vehicleCheckInHistory";
      console.log ( this.$store.state.checkin[cardFrom])
      return this.$store.state.checkin[cardFrom];
    }
  },
  data: function () {
        return {
          date: TimeUtils.getDate(today),
          currentDayIndex: 0
        }
  },
  methods: {
    getDate(epochTime) {
      const day = new Date(parseInt(epochTime));
      const date = moment(day).format("l");
      return date;
    },
    getTime(epochTime) {
      const day = new Date(parseInt(epochTime));
      const time = moment(day).format("LTS");
      return time;
    },
    getContent(info) {
      let machineNO = (info.serialNO).substr(info.serialNO.length - 2)
      return (
        "<p><b> 姓名 </b>" + info.name + "</p><p><b>卡片編號 </b>" + info.cardName + "</p><p>(" + info.cardID + ")</p><p><b> 刷卡機號 </b> " + machineNO + "</p>"
      );
    },
    getSubstrackDayData (substrackNumber) {
      console.assert (typeof substrackNumber === "number")
      const finalNumber = this.currentDayIndex + substrackNumber
      const fetchDate = TimeUtils.substractDayToDBFormate (finalNumber);
      this.setCurrentDate(finalNumber)
      this.date = TimeUtils.getDate(fetchDate);
      SocketAPI.getTodyCheckInHistory(fetchDate);
    },
    setCurrentDate(number) {
      this.currentDayIndex = number
    }
  }
};
</script>

<style lang="scss" scoped>
.timeline {
  margin-top: 40px;
  margin-bottom: 50px;
  padding: 0;
  .title{
    margin: 0;
    display: inline-block;
    width: 70%;
    vertical-align: super;
  }
}
.header{
  text-align:center;
  .button{
    display:inline-block;
    background: #007aff;
    color: white;
    vertical-align: bottom;
  }
}

</style>
<style lang="scss" global>
.timeline .timeline-item-inner {
  padding: 8px;
  p{
    margin: 5px 0;
  }
  b {
    color: #168888;
  }
}
</style>