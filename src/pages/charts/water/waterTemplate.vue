<template>
    <f7-page data-page="charts-water" class="charts-page">
        <f7-navbar>
            <f7-nav-left back-link="上一頁" sliding></f7-nav-left>
            <f7-nav-center>水位計</f7-nav-center>
        </f7-navbar>
        <br/><br/> <br/>
        <f7-block-title>{{date}}</f7-block-title>
        <Chart v-if="chartData !== null" :chartData="chartData" ></Chart>
    </f7-page>
</template>
<script>

import Chart from '../../../components/chart.vue'
import { mapState } from 'vuex'
import { waterFormate, testData } from './water.js'
import TimeUtils from "../../../utils/time-utils"
import store from '../../../store/index'
import { SensorAPI } from '../../../apis/'

// currently only used in staff mapping
const today = TimeUtils.substractDayToDBFormate(0);

let dataType = "";

export default {
    components: {
        Chart
    },
    data: function () {
        return {
            chartData : null,
            date: TimeUtils.getDate(today)
        }
    },
    computed: mapState({
        waterData: state => state.sensor.water
    }),
    methods: {
        getClock (epochDate) {
            var d = new Date (epochDate);
            return d.getHours () + ':' + d.getMinutes () + ':' + d.getSeconds ();
        },
        formateData () {
            let distance = []
            let time = []
            let data = waterFormate
            this.waterData.map (item => {
                distance.push (item.distance)
                const clock = this.getClock (item.time)
                time.push(clock)
            })

            data.series[0].data = distance
            data.xAxis[0].data = time
            this.chartData = data
        }
    },
    beforeCreate () {
        console.assert (this.$route.params.dataType)
        dataType = this.$route.params.dataType
    },
    mounted () {
        this.formateData ()
    }
}
</script>