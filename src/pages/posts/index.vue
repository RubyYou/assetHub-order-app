<template>
  <f7-page data-page="posts">
    <f7-navbar>
      <f7-nav-left back-link="上一頁" sliding></f7-nav-left>
      <f7-nav-center> 公告事項 </f7-nav-center>
    </f7-navbar>
    <br/><br/><br/>
    <f7-card v-html class="facebook-card" v-for="item in posts"
      :title="renderHeader (item.title, item.type)"
      :content="renderContent (item)"
      :footer="renderFooter (item)"
      :inner="true">
    </f7-card>
  </f7-page>
</template>

<script>
import moment from 'moment';
import Utils from '../../utils/utils'
import { mapState } from "vuex"
import 'moment/locale/zh-tw';

export default {
  data: function () {
    return {
      typeMap: {
        urgent : 'bolt_round_fill',
        normal : 'info_fill',
        important : 'bookmark_fill'
      },
      albumCount : 0
    }
  },
  computed: mapState({
    posts: state => state.config.postData
  }),
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
    renderContent (item) {
      let html = item.info

      if (item.map) {
        html += '<br/><iframe src=\"' + item.map + '" width="100%" height="200" frameborder="0" style="border:0" allowfullscreen></iframe>';
      }

      return html
    },
    renderFooter (item) {
      let album = '';

      if (item.images) {
        this['album-' + this.albumCount] = this.$f7.photoBrowser ({
          photos: item.images,
          theme: 'dark',
          type: 'popup'
        });

        const className = 'openAlbum-' + this.albumCount;
        album = '<a class="' + className + '"> 查看相關照片 </a>'
        this.albumCount ++;
      }

      return album;
    }
  },
  mounted () {
    moment.locale('zh-tw');

    const touchEvent = Utils.isMobileOrTablet () ? 'touchstart' : 'click';

    setTimeout (()=>{
      for (let i = 0 ; i < this.albumCount -1; i++) {
        this.$$('.openAlbum-' + i).on ('touchstart', () => {
          this['album-' + i].open ();
        });
      }
    }, 1000);
  }
}
</script>

<style lang="scss">
.f7-icons.bolt_round_fill {
  color : #fe6161;
}

.f7-icons.info_fill {
  color : #ffd05a;
}

.f7-icons.bookmark_fill {
  color : #1cc56a;
}

.card-header {
  display: block;
  background: #32495d;
  color:white;
  font-weight: 700;
}
.f7-icons {
  margin-right: 10px;
  vertical-align: sub;
}
table {
  border-collapse:collapse;
  border-spacing:0;
  width: 100%;
  th, td {
    font-family:Arial, sans-serif;
    font-size:14px;
    font-weight:normal;
    padding:10px 5px;
    border-style:solid;
    border-width:1px;
    overflow:hidden;
    word-break:normal;
  }
}
</style>