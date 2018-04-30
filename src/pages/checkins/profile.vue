<template>
    <f7-page data-page="profiles" class="profiles">
        <f7-block-title>{{content.title}}</f7-block-title>

        <!-- modify profile -->
        <f7-list id="modify-profile" v-if="mode==='open'" form>
            <f7-list-item v-for="item in content.details">
                <f7-label> {{item.ref}} </f7-label>
                <f7-input
                    v-if="item.key === 'cardName'" readonly :name="item.key"
                    type="text" v-model="selected [item.key]"
                />
                <f7-input
                    v-else :name="item.key"
                    type="text" v-model="selected [item.key]"
                />
            </f7-list-item>
            <f7-list-item v-if="dataType === 'vehicle'">
                <f7-label> 追蹤裝置 </f7-label>
                <select name="tracker" v-model="selected.tracker">
                    <option v-for="device in trackers" :value="device.deviceAddress">
                        {{device.deviceAddress}}
                    </option>
                </select>
            </f7-list-item>
            <f7-list-item>
                <f7-button @click="editProfile(selected._id)" fill> 修改 </f7-button>
                <f7-button @click="togglepanel(false)" fill color="red"> 取消 </f7-button>
            </f7-list-item>
        </f7-list>

        <f7-list class="profile-list" form>
            <f7-list-item v-for="profile in profiles">
                <p class="details" v-for="item in content.details" v-if="item.show === true">
                    {{profile[item.key]}}
                </p><br/>
                <f7-button fill @click="toggleEditProfile(profile._id)">
                    詳情
                </f7-button>
            </f7-list-item>
        </f7-list>

    </f7-page>
</template>

<script>
import { mapState } from "vuex";
import store from '../../store/index'

export default {
  name: "Profile",
  props: {
    content: Object, // details
    dataType: String
  },
  data: function() {
    return {
      mode: "close",
      type: this.dataType
    };
  },
  computed: {
    profiles() {
      return this.$store.state.checkin[this.dataType];
    },
    trackers() {
        return this.$store.state.sensor.trackers
    },
    selected () {
        return this.$store.state.checkin.selected
    }
  },
  methods: {
    toggleEditProfile (_id) {
        this.togglepanel(true)
        store.commit ('setProfileSelected', {id: _id, type: this.type })
    },
    editProfile (_id) {
        // TODO: add form validation
        const type = this.dataType;
        const info = this.$f7.formToData ("#modify-profile");
        const f7 =  this.$f7;
        this.$store.dispatch ("updateProfile", {_id, info, type, f7});
        this.togglepanel();
    },
    togglepanel (bool) {
        const mode = bool ? 'open' : 'close'
        this.mode = mode;
    }
  }
};
</script>

<style lang="sass" scoped>
.profiles{
    margin-top: 30px;
}
.list-block {
    margin: 25px 0;
}
.add {
    position: absolute;
    top: 30px;
    right: 0;
    color: #ff6262;
}

#modify-profile {
    .button{
        width: 46%;
    }
}

.profile-list {
    margin: 25px 0 80px;
    .item-inner {
        display: block;
    }
    .button {
        width: 20%;
        margin: 10px auto;
        min-width: 50px;
    }
    .details {
        width: 100%;
        display: block;
    }
}
</style>