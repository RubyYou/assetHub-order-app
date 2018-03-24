<template>
    <f7-page data-page="staff-record" class="record">
        <f7-timeline sides>
            <f7-timeline-item
                v-for="history in historys"
                :day = "getTime (history.time)"
                :month = "getDate (history.time)"
                inner
                title="Item Title"
                :content = "getContent (history)">
            </f7-timeline-item>
        </f7-timeline>
    </f7-page>
</template>

<script>
import moment from 'moment'
import { mapState } from 'vuex'

export default {
    name: "staff-history",
    // adding s in the end of word to help iteration
    computed: mapState ({
        historys: state => state.checkin.staffCheckInHistory
    }),
    methods: {
        getDate (epochTime) {
            const day = new Date (epochTime);
            const date = moment(day).format('l');
            return date
        },
        getTime (epochTime) {
            const day = new Date (epochTime);
            const time = moment(day).format('LTS');
            return time
        },
        getContent (info) {
            return '<p><b> 人員 </b> ' + info.username +
                    "</p><p><b> 地點</b> " + info.location + "</p>"
        }
    }
}
</script>

<style lang="scss" scoped>
.record{
    margin-top: 30px;
}
</style>
<style lang="scss" global>
.record .timeline-item-inner {
    b {
        color: #168888;
    }
}
</style>