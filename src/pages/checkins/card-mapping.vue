<template>

    <!-- DB: whiteCard: can mapped, need to fill out all info and insert, get it out each day -->
    <f7-page data-page="card-mapping" class="card-mapping">
        <f7-block-title>{{content.title}} <br/> {{date}}</f7-block-title>
        <div class="add" @click="togglePanel">
            <i v-if="mode==='normal'" class="f7-icons">add_round_fill</i>
            <i v-if="mode==='create'" class="f7-icons">delete_round_fill</i>
        </div>

        <!-- create Mapping -->
        <f7-list id="create-mapping" v-if="mode==='create'" form>
            <f7-list-item>
                <f7-label>姓名</f7-label>
                <f7-input name="name" type="text" />
            </f7-list-item>
            <f7-list-item>
                <f7-label>卡片ID</f7-label>
                <select name="cardID" >
                    <option v-for="card in cards" :value="card.cardID">{{card.cardName}}</option>
                </select>
            </f7-list-item>
            <f7-list-item>
                <f7-label>血型</f7-label>
                <f7-input name="bloodType" ref="bloodType" type="select">
                    <option value="O">O</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="AB">AB</option>
                </f7-input>
            </f7-list-item>
            <f7-list-item>
                <f7-label>職務</f7-label>
                <f7-input name="role" ref="role" type="text" />
            </f7-list-item>
             <f7-list-item>
                <f7-label>公司</f7-label>
                <f7-input name="company" ref="company" type="text" />
            </f7-list-item>
            <f7-list-item>
                <f7-button @click="createMapping" fill>新建配對記錄</f7-button>
            </f7-list-item>
        </f7-list>

        <f7-list class="mapping-list" form>
            <f7-list-item v-for="mapping in mappings">
                <p><b>姓名</b><br/> {{mapping.name}} </p>
                <p><b>卡片ID</b><br/> {{mapping.cardName}} </p>
                <p><b>血型</b><br/> {{mapping.bloodType}} </p>
                <p><b>職務</b><br/> {{mapping.role}} </p>
                <p><b>公司</b><br/> {{mapping.company}} </p>
                <i class="f7-icons" @click="deleteMapping (mapping._id)">delete_round_fill</i>
            </f7-list-item>
        </f7-list>
    </f7-page>
</template>

<script>
import { mapState } from "vuex";
import TimeUtils from "../../utils/time-utils"

// currently only used in staff mapping
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
      return this.$store.state.checkin.staff;
    },
    cards() {
      return this.$store.state.checkin.staffCardIds;
    },
    mappings() {
      return this.$store.state.checkin.staffCardMapping;
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
.card-mapping {
    .item-inner {
        p {
            font-size: 12px;
            color: #929292;
        }
        i.f7-icons {
            color: #929292;
            margin-right: -2px;
        }
    }
}
</style>
