<template>
    <f7-page data-page="checkIns">
    <f7-navbar >
        <f7-nav-left back-link="上一頁" sliding></f7-nav-left>
        <f7-nav-center>{{title[dataType]}}</f7-nav-center>
    </f7-navbar>
    <f7-toolbar tabbar bottom labels>
        <f7-link tab-link="#tab1">
            <i class="f7-icons">add_round_fill</i>
            <span class="tabbar-label">{{profile[dataType].title}}</span>
        </f7-link>
        <!--<f7-link v-if="dataType === 'staff'" tab-link="#tab2" >
            <i class="f7-icons">document_text_fill</i>
            <span class="tabbar-label">建立記錄</span>
        </f7-link>-->
        <f7-link tab-link="#tab3" active>
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
            <!--<f7-tab id="tab2" v-if="dataType === 'staff'">
                <CardMapping
                    :content="getMapping ()"
                    :dataType="dataType"
                />
            </f7-tab>-->
            <f7-tab id="tab3" active>
                <CheckInTimeline
                    :content="getCheckinHistory ()"
                    :dataType="dataType"/>
            </f7-tab>
        </f7-tabs>
    </div>
    </f7-page>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Profile from './profile.vue'
import CardMapping from './card-mapping.vue'
import CheckInTimeline from './checkin-timeline.vue'

export default {
    name: "checkIns",
    components: {
        Profile,
        CardMapping,
        CheckInTimeline
    },
    data: function (){
        return {
            title: {
                staff: "工人打卡",
                vehicle: "車輛打卡"
            },
            profile: {
                staff: {
                    title: "人員卡片履歷",
                    details: [
                        { key: "name", ref: '姓名', show: true},
                        { key: "bloodType", ref: '血型', show: true},
                        { key: "company", ref: '公司', show: false},
                        { key: "role", ref: '職務', show: true}
                    ]
                },
                vehicle: {
                    title: "車輛卡片履歷",
                    details: [
                        { key: "carNumber", ref: '車號', show: false},
                        { key: "company", ref: '公司', show: false},
                        { key: "info", ref: '資訊', show: true}
                    ]
                } // carNumber is number of Plate --> // cardId is only for mapping
            },
            mapping: {
                staff: {
                    title: "今日人員卡片配對"
                }
            },
            checkinHistroy: {
                staff: {
                    profileName: "工作人員"
                },
                vehicle: {
                    profileName: "車輛編號"
                }
            }
        }
    },
    computed: {
        dataType () {
            return this.$route.params.type
        }
    },
    methods: {
        getProfile(){
            return this.profile[this.dataType]
        },
        getMapping () {
            return this.mapping[this.dataType]
        },
        getCheckinHistory () {
            return this.checkinHistroy[this.dataType]
        }
    },
    beforeCreate () {
        console.assert (this.$route.params.type)
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
