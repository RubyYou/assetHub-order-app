<template>
  <f7-page data-page="materials">
    <f7-navbar >
      <f7-nav-left back-link="上一頁" sliding></f7-nav-left>
      <f7-nav-center>公告事項</f7-nav-center>
    </f7-navbar>
    <f7-block class="posts">
      <div v-for="post in posts">
        <f7-block-title>{{renderDate (post.date)}}</f7-block-title>
        <f7-card class="facebook-card" v-for="item in post.list"
          :title="renderHeader (item.title, item.type)" 
          :content="item.info"
          :inner="true">
        </f7-card>
      </div>
    </f7-block>
    </f7-page>
  </div>
</template>


<script>
import Loader from '../loader/loader.js';
import moment from 'moment';
import 'moment/locale/zh-tw';

export default {
  data: function () {
    return {
      typeMap: {
        urgent : 'bolt_round_fill',
        normal : 'info_fill',
        important : 'bookmark_fill'
      }
    }
  },
  computed: {
    posts () {
      return this.$store.state.posts;
    }
  },
  methods: {
    renderHeader (title, type) {
      const icon = '<i class="f7-icons ' + this.typeMap [type] + '\">' + this.typeMap [type] + '</i>';
      return icon + title;
    },
    renderDate (epochTime) {
      const date = new Date (epochTime);
      const time = moment (date).format ('LL');
      const day = moment (date).calendar ();
      return time + " " + day;
    },
    renderFooter (item) {

    }
  },
  mounted () {
    moment.locale('zh-tw');
  }
}
</script>

<style>
.f7-icons.bolt_round_fill {
  color : #ff065e;
}

.f7-icons.info_fill {
  color : #009dff;
}

.f7-icons.bookmark_fill {
  color : #46ad71;
}

.card-header {
  display: block;
}

.posts .f7-icons {
  margin-right: 10px;
  vertical-align: sub;
}

.posts .content-block-title {
  color: #216338;
}

.posts .card-header {
  background:#d7fae3;
  color: #107b42;
  font-weight: 700;
}

</style>