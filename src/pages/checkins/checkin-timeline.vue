<template>
    <f7-page data-page="checkin-timeline" class="timeline">
        <f7-timeline sides>
            <f7-timeline-item
                v-for="history in historys"
                :day = "getTime (history.time)"
                :month = "getDate (history.time)"
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
  methods: {
    getDate(epochTime) {
      const day = new Date(parseInt(epochTime));
      console.log("day", day);
      const date = moment(day).format("l");
      return date;
    },
    getTime(epochTime) {
      const day = new Date(parseInt(epochTime));
      const time = moment(day).format("LTS");
      return time;
    },
    getContent(info) {
      const name = this.content.profileName;

      return (
        "<p><b> " +
        name +
        " </b> " +
        info.profileName +
        "</p><p><b> 地點</b> " +
        info.location +
        "</p>"
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.timeline {
  margin-top: 30px;
}
</style>
<style lang="scss" global>
.timeline .timeline-item-inner {
  b {
    color: #168888;
  }
}
</style>