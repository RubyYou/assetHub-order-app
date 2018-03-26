<template>
    <f7-page data-page="mapping-staff" class="mapping-staff">
        <f7-block-title>{{content.title}} <br/> {{date}}</f7-block-title>
        <div class="add" @click="togglePanel">
            <i v-if="mode==='normal'" class="f7-icons">add_round_fill</i>
            <i v-if="mode==='create'" class="f7-icons">delete_round_fill</i>
        </div>
        <!-- create Mapping -->
        <f7-list id="create-mapping" v-if="mode==='create'" form>
            <f7-list-item>
                <f7-label>工作人員</f7-label>
                <select name="username" >
                    <option v-for="staff in staffs" :value="staff['姓名']">{{staff['姓名']}}</option>
                </select>
            </f7-list-item>
            <f7-list-item>
                <f7-label>卡片ID</f7-label>
                <select name="cardID" >
                    <option v-for="cardId in cardIds" :value="cardId">{{cardId}}</option>
                </select>
            </f7-list-item>
            <f7-list-item>
                <f7-button @click="createMapping" fill>{{content.createBtn}}</f7-button>
            </f7-list-item>
        </f7-list>

        <f7-list class="mapping-list" form>
            <f7-list-item v-for="mapping in mappings">
                <p><b>卡片ID: </b><br/> {{mapping.cardID}}</p>
                <p><b>使用者姓名: </b><br/>{{mapping.username}}</p>
                <i class="f7-icons" @click="deleteMapping(mapping.key)">delete_round_fill</i>
            </f7-list-item>
        </f7-list>
    </f7-page>
</template>

<script>
import { mapState } from 'vuex'
import TimeUtils from '../../utils/time-utils'

const today = TimeUtils.substractDayToDBFormate (0)

export default {
    name: "staff-mapping",
    props: {
        content: Object,
        dataType: String
    },
    data: function () {
        return {
            mode: "normal",
            date: TimeUtils.getDate (today)
        }
    },
    // adding s in the end of word to help iteration
    computed: mapState ({
        profiles: state => state.checkin[this.dataType],
        cardIds: state => {
            // ?? bug, can not find data type
            const cardFrom = this.dataType === "staff" ? "staffCardIds" : "vehicleCardIds"
            return state.checkin[cardFrom]
        },
        mappings: state => {
             // ?? bug, can not find data type
            const mappingFrom = this.dataType === "staff" ? "staffCardMapping" : "vehicleCardMapping"
            return state.checkin[mappingFrom]
        }
    }),
    methods: {
        createMapping () {
            // TODO: add form validation
            const type = this.dataType
            let info = this.$f7.formToData ('#create-mapping')
            this.$store.dispatch ('createMapping', {type, info})
        },
        deleteMapping (key) {
            const type = this.dataType
            this.$store.dispatch ('deleteMapping', {type, key})
        },
        togglePanel () {
            const mode = this.mode === 'create' ? 'normal' : 'create'
            this.mode = mode
        }
    }
}
</script>
<style lang="sass" scoped>
.content-block-title {
    margin: 25px 15px 10px;
    line-height: 1.3;
}
.mapping-staff{
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
.mapping-staff {
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