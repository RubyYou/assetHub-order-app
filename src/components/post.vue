<template>
  <f7-page data-page="posts">
    <f7-block class="posts">
      <div v-for="post in posts">
        <f7-block-title>{{renderDate (post.date)}}</f7-block-title>
        <f7-card v-html class="facebook-card" v-for="item in post.list"
          :title="renderHeader (item.title, item.type)"
          :content="item.info"
          :footer="renderFooter (item)"
          :inner="true">
        </f7-card>
      </div>
    </f7-block>
    </f7-page>
</template>


<script>
import moment from 'moment';
import Utils from '../utils/utils'
import 'moment/locale/zh-tw';
import { posts } from '../utils/data'

export default {
  data: function () {
    return {
      typeMap: {
        urgent : 'bolt_round_fill',
        normal : 'info_fill',
        important : 'bookmark_fill'
      },
      albumCount : 0,
      posts : posts
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
      let map = '';
      let album = '';

      if (item.map) {
        map = '<iframe src=\"' + item.map + '" width="100%" height="200" frameborder="0" style="border:0" allowfullscreen></iframe>';
      }

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

      return map + album;
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