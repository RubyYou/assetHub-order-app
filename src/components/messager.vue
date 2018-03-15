<template>
  <div data-page="messager" class="messager-wrap" >
    <f7-messages >
      <f7-message v-for= "message in messages"
        :name = "message.name"
        :text = "message.text"
        :type = "renderType (message.name)"
        :avatar = "avatar"
        :time = "renderTime (message.date)"
        :date = "renderDate (message.date)"
      >
      </f7-message>
    </f7-messages>
    <f7-messagebar placeholder="Message" send-link="Send" @submit="onSubmit"></f7-messagebar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MessageAPI from '../apis/message'
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
    renderType (name) {
      return this.userInfo.username === name ? 'sent' : 'received'
    },
    renderDate (epochTime) {
      const date = new Date (epochTime);
      const time = moment (date).format ('LL');
      const day = moment(date).format('dddd');
      const fromNow = moment(date).fromNow ();
      return time + " " + day + " ( " + fromNow + " )";
    },
    renderTime (epochTime) {
      return 'some time'
    },
    onSubmit (text, clear) {
      if (text.trim().length === 0) return;
      const payload = {
        name: this.userInfo.username,
        text: text,
        date: new Date ().getTime ()
      }
      MessageAPI.submit (payload)
      clear();
    },
    getTime () {
      var now = new Date();
      var hours = now.getHours();
      var minutes = now.getMinutes();
      return hours + ':' + minutes;
    }
  },
  mounted () {

  }
}
</script>

<style lang="sass" scoped>
.messager-wrap {
  position: relative;
}
.toolbar {
  position: fixed;
}
</style>