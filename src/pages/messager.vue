<template>
  <f7-page data-page="materials">
    <f7-navbar >
      <f7-nav-left back-link="上一頁" sliding></f7-nav-left>
      <f7-nav-center>現場溝通</f7-nav-center>
    </f7-navbar>
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
    </f7-page>
  </div>
</template>


<script>
export default {
  data: function () {
    return {
      name: 'ken',
      avatar:'img/avatar/1.jpg',
    }
  },
  computed: {
    messages () {
      return this.$store.state.messages;
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
      // Clear Message Bar
      clear();
    }
  }
}
</script>