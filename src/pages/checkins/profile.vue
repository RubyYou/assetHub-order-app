<template>
    <f7-page data-page="profiles" class="profiles">
        <f7-block-title>{{content.title}}</f7-block-title>
        <div class="add" @click="togglePanel">
            <i v-if="mode==='normal'" class="f7-icons">add_round_fill</i>
            <i v-if="mode==='create'" class="f7-icons">delete_round_fill</i>
        </div>

        <!-- create profile -->
        <f7-list id="create-profile" v-if="mode==='create'" form>
            <!-- text inputs -->
            <f7-list-item v-for="input in content.inputs" >
                <f7-label>{{input}}</f7-label>
                <f7-input :name="input" type="text" />
            </f7-list-item>
            <!-- radio -->
            <f7-list-item v-for="radio in content.radios">
                <f7-label>{{Object.keys(radio)[0]}}</f7-label>
                <select :name="Object.keys(radio)[0]" >
                    <option v-for="item in Object.values(radio)[0]" :value="item">{{item}}</option>
                </select>
            </f7-list-item>
            <f7-list-item>
                <f7-button @click="createProfile" fill>{{content.createBtn}}</f7-button>
            </f7-list-item>
        </f7-list>

        <f7-list class="profile-list" form>
            <f7-list-item v-for="profile in profiles">
                <p v-for="input in content.inputs">
                    <b>{{input}} :</b><br/>{{profile[input]}}</p>
                <p v-for="radio in content.radios">
                    <b>{{Object.keys(radio)[0]}} :</b> {{profile[Object.keys(radio)[0]]}}</p>
                <i class="f7-icons" @click="deleteProfile(profile._id)">delete_round_fill</i>
            </f7-list-item>
        </f7-list>

    </f7-page>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Profile",
  props: {
    content: Object,
    dataType: String
  },
  data: function() {
    return {
      mode: "normal",
      type: this.dataType
    };
  },
  computed: {
    profiles() {
      return this.$store.state.checkin[this.dataType];
    }
  },
  methods: {
    createProfile() {
      // TODO: add form validation
      const type = this.dataType;
      let info = this.$f7.formToData("#create-profile");
      const f7 =  this.$f7
      this.$store.dispatch("createProfile", { type, info, f7});
    },
    deleteProfile(_id) {
      const type = this.dataType;
      const f7 =  this.$f7
      this.$store.dispatch("deleteProfile", { type, _id, f7});
    },
    togglePanel() {
      const mode = this.mode === "create" ? "normal" : "create";
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
.button.button-fill {
    width: 100%;
}
.profile-list {
    .item-inner{
        p {
            font-size: 12px;
            color: #929292;
        }
        i.f7-icons {
            color: #929292;
        }
    }
}
</style>