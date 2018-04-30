<template>
    <f7-page data-page="charts-water" class="charts-page">
        <f7-navbar>
            <f7-nav-left back-link="上一頁" sliding></f7-nav-left>
            <f7-nav-center>追蹤車輛定位</f7-nav-center>
        </f7-navbar>
        <br/><br/>
        <f7-block-title>{{date}}</f7-block-title>
    </f7-page>
</template>

<script>

import { mapState } from 'vuex'
import TimeUtils from "../../utils/time-utils"
import store from '../../store/index'
import { SensorAPI } from '../../apis/'

// TODO: get device mapping
const today = TimeUtils.substractDayToDBFormate(0);

export default {
    data: function () {
        return {
            googleMapData : null,
            date: TimeUtils.getDate(today)
        }
    },
    methods: {

    },
    mounted () {
        //this.formateData ()
    }
}
</script>