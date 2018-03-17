<template>
  <div data-page="messager" class="messager-wrap" >
    <div v-for="day in allMessages" class="messages">
      <div class="messages-date">
          {{renderDate (day.date)}}
      </div>
      <div v-for="message in day.messages"
          :class="renderClass (message.username)">
        <div class="message-name">{{message.username}}</div>
        <div v-html="renderText (message)" class="message-text"></div>
        <div style="background-image:url(img/user.png)" class="message-avatar"></div>
        <div class="message-label">{{renderTime(message.time)}}</div>
      </div>
    </div>
    <f7-messagebar placeholder="Message" @submit="onSubmit">
      <div slot="before-textarea">
        <i class="f7-icons camera">camera_fill</i>
      </div>
      <span slot="send-link">送出</span>
    </f7-messagebar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MessageAPI from '../apis/message'
import TimeUtils from '../utils/time-utils'
import moment from 'moment'

export default {
  data: function () {
    return {
      avatar:'img/user.png',
    }
  },
  computed: mapState ({
    userInfo: state => state.userInfo,
    allMessages: state => state.allMessages
  }),
  methods: {
    renderClass (username) {
      const type = this.userInfo.username === username ? 'sent' : 'received'
      return "message message-" + type
    },
    renderText (message){
      var html = ''

      if (message.type === "form") {
        // Only allow to open today's form
        const isToday = TimeUtils.isSameAsToday (message.time)
        html = isToday ?
              '<a class="aaa" href=\"' + message.url + '\">' + message.formName + '</a> 更新' :
              '<p>' + message.formName + '更新</p>'
      } else {
        html = '<p>' + message.text + '</p>'
      }

      return html
    },
    onSubmit (text, clear) {
      if (text.trim().length === 0) return;
      MessageAPI.submit ({text: text})
      clear();
    },
    renderDate (date) {
      return TimeUtils.getDate (date)
    },
    renderTime (epochTime) {
      const date = new Date (epochTime);
      const fromNow = moment(date).fromNow ();
      return fromNow
    }
  },
  mounted () {}
}
</script>

<style scoped>
/* scoped css won't succeed if doesn't has class name in tempalte */
.messager-wrap {
  position: relative;
  overflow-y: scroll;
  padding-bottom: 120px;
}
.toolbar {
  position: fixed;
}

.message-sent .message-text {
  padding-right: 40px;
}

.message-received .message-text {
  padding-left: 40px;
}

.f7-icons.camera {
  margin-right: 10px;
  color: #077bff;
}

</style>

<style lang="scss" global>
.message-received {
  .message-text {
     a {
      color: #e46a5d;
    }
    p {
      margin: 0;
    }
  }
}
.message-sent {
  .message-text {
    a {
      color: #e1f936;
    }
    p {
      margin: 0;
    }
  }
}
</style>