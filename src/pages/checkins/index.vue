<template>
    <f7-page data-page="checkIns">
    <!-- Need a coustom one as icon formate not support f7-icons -->
    <f7-toolbar tabbar bottom labels>
        <f7-link tab-link="#tab1" >
            <i class="f7-icons">add_round_fill</i>
            <span class="tabbar-label">人員履歷</span>
        </f7-link>
        <f7-link tab-link="#tab2" active>
            <i class="f7-icons">document_text_fill</i>
            <span class="tabbar-label">建立卡片記錄</span>
        </f7-link>
        <f7-link tab-link="#tab3">
            <i class="f7-icons">check_round</i>
            <span class="tabbar-label">打卡記錄</span>
        </f7-link>
    </f7-toolbar>
    <div class="checkIn-wrap">
        <f7-tabs>
            <f7-tab id="tab1">
                <Profile
                    :content="getProfile ()"
                    :dataType="dataType"
                />
            </f7-tab>
            <f7-tab id="tab2" active>
                <CardMapping
                    :content="getMapping ()"
                    :dataType="dataType"
                />
            </f7-tab>
            <f7-tab id="tab3">
                <CheckInRecord />
            </f7-tab>
        </f7-tabs>
    </div>
    </f7-page>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Profile from './profile.vue'
import CardMapping from './card-mapping.vue'
import CheckInRecord from './checkin-record.vue'

export default {
    props: {
        dataType: String // it has to be staff or vehicle
    },
    name: "checkIns",
    components: {
        Profile,
        CardMapping,
        CheckInRecord
    },
    data: function (){
        return {
            profile: {
                staff: {
                    title: "人員履歷",
                    inputs: ["姓名", "公司名稱"],
                    radios: [{"工作項目": ["水泥工", "模板工", "打石工"]},
                            {"血型": ["O", "A", "B", "AB"]}],
                    createBtn : "新建人員"
                },
                vehicle: {
                    title: "車輛履歷",
                    inputs: ["車輛編號", "公司名稱"],
                    radios: [{"車種": ["起重機", "挖土機", "吊機"]}],
                    createBtn: "新建車輛"
                }
            },
            mapping: {
                staff: {
                    title: "今日人員卡片配對",
                    createBtn : "新建人員卡片配對"
                },
                vehicle: {
                    title: "今日車輛卡片配對",
                    createBtn: "新建車輛卡片配對"
                }
            }
        }
    },
    methods: {
        getProfile(){
            return this.profile[this.dataType]
        },
        getMapping () {
            return this.mapping[this.dataType]
        }
    }
}
</script>
<style lang="sass" scoped>
.checkIn-wrap{
    margin-top: 50px;
}
.toolbar-inner .tab-link .f7-icons{
    margin: 0 auto;
}
</style>
