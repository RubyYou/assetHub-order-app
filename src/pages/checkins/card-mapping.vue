<template>
    <f7-page data-page="card-mapping" class="card-mapping">
        <f7-block-title>{{content.title}} <br/> {{date}}</f7-block-title>
        <div class="add" @click="togglePanel">
            <i v-if="mode==='normal'" class="f7-icons">add_round_fill</i>
            <i v-if="mode==='create'" class="f7-icons">delete_round_fill</i>
        </div>
        <!-- create Mapping -->
        <f7-list id="create-mapping" v-if="mode==='create'" form>
            <f7-list-item>
                <f7-label>{{content.mapInfo.profileLabel}}</f7-label>
                <select name="profileName" >
                    <option v-for="profile in profiles"
                            :value="profile[content.mapInfo.profileLabel]">
                            {{profile[content.mapInfo.profileLabel]}}
                    </option>
                </select>
            </f7-list-item>
            <f7-list-item>
                <f7-label>{{content.mapInfo.cardLabel}}</f7-label>
                <select name="cardID" >
                    <option v-for="card in cards" :value="card.cardID">{{card.cardName}}</option>
                </select>
            </f7-list-item>
            <f7-list-item>
                <f7-button @click="createMapping" fill>{{content.createBtn}}</f7-button>
            </f7-list-item>
        </f7-list>

        <f7-list class="mapping-list" form>
            <f7-list-item v-for="mapping in mappings">
                <p><b>{{content.mapInfo.cardLabel}}</b><br/> {{mapping.cardName}}</p>
                <p><b>{{content.mapInfo.profileLabel}}</b><br/>{{mapping.profileName}}</p>
                <i class="f7-icons" @click="deleteMapping(mapping._id)">delete_round_fill</i>
            </f7-list-item>
        </f7-list>
    </f7-page>
</template>

<script>
import { mapState } from "vuex";
import TimeUtils from "../../utils/time-utils";

const today = TimeUtils.substractDayToDBFormate(0);

export default {
  name: "card-mapping",
  props: {
    content: Object,
    dataType: String
  },
  data: function() {
    return {
      mode: "normal",
      date: TimeUtils.getDate(today)
    };
  },
  computed: {
    profiles() {
      return this.$store.state.checkin[this.dataType];
    },
    cards() {
      const cardFrom =
        this.dataType === "staff" ? "staffCardIds" : "vehicleCardIds";
      return this.$store.state.checkin[cardFrom];
    },
    mappings() {
      const mappingFrom =
        this.dataType === "staff" ? "staffCardMapping" : "vehicleCardMapping";
      return this.$store.state.checkin[mappingFrom];
    }
  },
  methods: {
    createMapping() {
      // TODO: add form validation
      const type = this.dataType;
      const formData = this.$f7.formToData("#create-mapping");
      const f7 =  this.$f7;
      const cardName = this.cards.find (item => { return item.cardID === formData.cardID}).cardName
      const info = Object.assign({}, formData, {"cardName": cardName})
      this.$store.dispatch("createMapping", { type, info, f7 });
      this.togglePanel ()
    },
    deleteMapping(_id) {
      const type = this.dataType;
      const f7 =  this.$f7;
      this.$store.dispatch("deleteMapping", { type, _id, f7 });
    },
    togglePanel() {
      const mode = this.mode === "create" ? "normal" : "create";
      this.mode = mode;
    }
  }
};
</script>
<style lang="sass" scoped>
.content-block-title {
    margin: 25px 15px 10px;
    line-height: 1.3;
}
.card-mapping{
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
.card-mapping{
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