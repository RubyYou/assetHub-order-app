<template>
  <div data-page="messager" class="messager-wrap" >
    <f7-messages >
      <f7-message v-for= "message in messages"
        :name = "message.name"
        :text = "message.text"
        :type = "renderType (message.name)"
        :avatar = "avatar"
        :time = "message.time"
        :date = "(message.date) ? (message.date) : null"
        :day = "(message.day) ? (message.day) : null"
      >
      </f7-message>
    </f7-messages>
    <f7-messagebar placeholder="Message" send-link="Send" @submit="onSubmit"></f7-messagebar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MessageAPI from '../apis/message'

export default {
  data: function () {
    return {
      avatar:'img/worker.png',
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
    onSubmit (text, clear) {
      if (text.trim().length === 0) return;
      const payload = {
        name: this.userInfo.username,
        text: text,
        date: new Date ().getTime ()
      }
      // this.messages.push({
      //   name: this.userInfo.username,
      //   avatar: this.avatar,
      //   text: text,
      //   type: 'sent',
      //   date: this.getTime ()
      // });
      MessageAPI.submitMessages (payload)
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
    console.log ('messager')
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