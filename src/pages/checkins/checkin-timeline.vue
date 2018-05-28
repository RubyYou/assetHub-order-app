<template>
    <f7-page data-page="checkin-timeline" class="timeline">
        <h3 class="title"> 今日打卡記錄 <br/> <b>{{date}}</b> </h3>
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
        this.dataType === "staff"
          ? "staffCheckInHistory"
          : "vehicleCheckInHistory";
      return this.$store.state.checkin[cardFrom];
    }
  },
  data: function () {
        return {
          date: TimeUtils.getDate(today)
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
        "<p><b> 姓名 </b>" + info.name + "</p><p><b>卡片編號 </b>" + info.cardName +  "</p><p>(" + info.cardID + ")</p><p><b> 刷卡機號 </b> " + machineNO + "</p>"
      );
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
    margin-top:20px;
    text-align:center;
    b{
      color: #007aff;
    }
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