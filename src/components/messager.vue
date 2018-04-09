<template>
  <f7-page data-page="messager"  class="messager-wrap">
    <f7-navbar>
      <f7-nav-left back-link="上一頁" sliding></f7-nav-left>
      <f7-nav-center> 現場溝通 </f7-nav-center>
    </f7-navbar>
    <f7-messages v-for="day in allMessages">
      <div class="messages-date">
          {{renderDate (day.date)}}
      </div>
      <div v-for="message in day.messages"
          :class="renderClass (message.username)"
          @click="triggerAction(message)">
        <div class="message-name">{{message.username}}</div>
        <div v-html="renderText (message)" class="message-text"></div>
        <div style="background-image:url(img/user.png)" class="message-avatar"></div>
        <div class="message-label">{{renderTime(message.time)}}</div>
      </div>
    </f7-messages>
    <f7-messagebar placeholder="Message" @submit="onSubmit">
      <!--<div slot="before-textarea">
        <i class="f7-icons camera">camera_fill</i>
      </div>-->
      <span slot="send-link">送出</span>
    </f7-messagebar>
  </f7-page>
</template>

<script>
import { mapState } from "vuex";
import { MessageAPI } from "../apis";
import TimeUtils from "../utils/time-utils";
import moment from "moment";

export default {
  props: {
    onSwitchMode: Function
  },
  data: function() {
    return {
      avatar: "img/user.png"
    };
  },
  computed: mapState({
    userInfo: state => state.userInfo,
    allMessages: state => state.allMessages
  }),
  methods: {
    renderClass(username) {
      const type = this.userInfo.username === username ? "sent" : "received";
      return "message message-" + type;
    },
    renderText (message){
      let html = ''
      let pendingClass = message.pending ? ' pending' : ''

      if (message.type === "form") {
        html = '<p class="highlight"'+ pendingClass +'>' + message.formName + '更新</p>'
      } else {
        html = '<p class="'+ pendingClass +'">' + message.text +'</p>'
      }
      return html
    },
    onSubmit(text, clear) {
      if (text.trim().length === 0) return;
      MessageAPI.submit({ text: text });
      clear();
    },
    renderDate(date) {
      return TimeUtils.getDate(date);
    },
    renderTime(epochTime) {
      const date = new Date(parseInt(epochTime));
      const fromNow = moment(date).fromNow();
      return fromNow;
    },
    triggerAction(message) {
      const isToday = TimeUtils.isSameAsToday(parseInt(message.time));
      if (message.type === "form" && isToday) {
        this.onSwitchMode("forms");
        this.$f7Router.changeRoute(message.url, 0, {});
      }
    },
    handleScroll(event) {
      if (event.target.scrollTop === 0) {
        MessageAPI.getPrevious();
      }
    }
  },
  mounted() {
    // this is dynamic created element, after component mounted
    setTimeout(() => {
      const ele = document.getElementsByClassName("messages-content")[0];
      ele && ele.addEventListener("scroll", this.handleScroll);
    }, 2000);
  },
  destroyed() {
    const ele = document.getElementsByClassName("messages-content")[0];
    ele && ele.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped>
.messager-wrap {
  position: relative;
  padding-top: 44px;
}

.f7-icons.camera {
  margin-right: 10px;
  color: #077bff;
}
</style>

<style lang="scss" global>
.message-received {
  .message-text {
    p {
      margin: 0;
      &.highlight {
        color: #e46a5d;
      }
      &.pending {
        opacity: 0.5;
      }
    }
  }
}
.message-sent {
  .message-text {
    p {
      margin: 0;
      &.highlight {
        color: #e1f936;
      }
      &.pending {
        opacity: 0.5;
      }
    }
  }
}
</style>