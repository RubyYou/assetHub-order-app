<template>
  <div data-page="messager" class="messager-wrap" >
    <div v-for="message in messages" class="messages">
      <div v-if="message.created" class="messages-date">
          {{renderDate (message.created)}}
      </div>
      <div v-else :class="renderClass(message.username)">
        <div class="message-name">{{message.username}}</div>
        <div v-html="renderText(message)" class="message-text"></div>
        <div style="background-image:url(img/user.png)" class="message-avatar"></div>
        <div class="message-label">{{renderTime(message.time)}}</div>
      </div>
    </div>
    <f7-messagebar placeholder="Message" @submit="onSubmit">
      <div slot="before-textarea">camera</div>
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
    messages: state => state.messages
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
    renderDate (epochTime) {
      return TimeUtils.getDate (epochTime)
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