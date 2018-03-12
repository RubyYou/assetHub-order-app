<template>
  <div data-page="messager" class="messager-wrap" >
    <f7-messages >
      <f7-message v-for= "message in messages"
        :name = "(message.name) ? message.name : null"
        :text = "(message.text) ? message.text : null"
        :type = "(message.type) ? message.type : null"
        :avatar = "(message.avatar) ? message.avatar : null"
        :time = "(message.time) ? (message.time) : null"
        :date = "(message.date) ? (message.date) : null"
        :day = "(message.day) ? (message.day) : null"
      >
      </f7-message>
    </f7-messages>
    <f7-messagebar placeholder="Message" send-link="Send" @submit="onSubmit"></f7-messagebar>
  </div>
</template>

<script>
export default {
  props: [
    'messages'
  ],
  data: function () {
    return {
      name: 'ken',
      avatar:'img/avatar/1.jpg',
    }
  },
  methods: {
    onSubmit (text, clear) {
      if (text.trim().length === 0) return;
      this.messages.push({
        name: this.name,
        avatar: this.avatar,
        text: text,
        type: 'sent',
        date: (function () {
          var now = new Date();
          var hours = now.getHours();
          var minutes = now.getMinutes();
          return hours + ':' + minutes;
        })()
      });
      clear();
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
  height: calc(100% - 50px);
}
.toolbar {
  position: absolute;
}
</style>