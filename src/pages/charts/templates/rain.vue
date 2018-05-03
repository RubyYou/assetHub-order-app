<template>
    <f7-page data-page="charts-water" class="charts-page">
        <f7-navbar>
            <f7-nav-left back-link="上一頁" sliding></f7-nav-left>
            <f7-nav-center>雨量筒</f7-nav-center>
        </f7-navbar>
        <br/><br/>
        <f7-block-title class="day-title">
            <f7-button @click="getSubstrackDayData(1)"> < </f7-button>
            <p>{{date}} / 雨量累計 {{totalAmount}} mm  </p>
            <f7-button @click="getSubstrackDayData(-1)"> > </f7-button>
        </f7-block-title>
        <Chart v-if="chartData !== null" :chartData="chartData" ></Chart>
        <div v-else class="no-data"> <p>今日還沒有雨量數據</p> </div>
    </f7-page>
</template>
<script>

import Chart from '../../../components/chart.vue'
import { mapState } from 'vuex'
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
            date: TimeUtils.getDate(today),
            totalAmount: 0,
            chartOptions: {
                dataZoom: { show: true, start : 20, end: 80 },
                legend : { data : ['降雨量 - mm'] },
                grid: { y2: 120 },
                xAxis : [ { type: 'category', data: []}],
                yAxis : [ { type: 'value', data: [-5, 0, 5, 10]}],
                series : [ { name: 'rain', type: 'line', showAllSymbol: true, data: []}]
            },
            currentDayIndex : 0
        }
    },
    computed: mapState({
        rainData: state => state.sensor[dataType]
    }),
    methods: {
        getClock (epochDate) {
            var d = new Date (epochDate);
            return d.getHours () + ':' + d.getMinutes () + ':' + d.getSeconds ();
        },
        formateData () {
            if (this.rainData.length > 0) {
                let mms = []
                let time = []
                this.rainData.map (item => {
                    mms.push (item.mm)
                    const clock = this.getClock (item.time)
                    time.push(clock)
                })
                this.chartOptions.series[0].data = mms
                this.chartOptions.xAxis[0].data = time
                this.chartData = this.chartOptions
                this.totalAmount = mms[mms.length-1]
            } else {
                this.chartData = null
            }
        },
        getSubstrackDayData (substrackNumber) {
            console.assert (typeof substrackNumber === "number")
            const finalNumber = this.currentDayIndex + substrackNumber
            const fetchDate = TimeUtils.substractDayToDBFormate (finalNumber);
            this.currentDayIndex = finalNumber

            const payload = {
                type: dataType,
                date: fetchDate,
                callBack : this.formateData
            }
            this.$store.dispatch ("getSensorData", payload);
            this.date = TimeUtils.getDate(fetchDate)
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
<<style lang="scss">
.no-data {
    text-align: center;
    display: block;
    width: 95%;
    background: gainsboro;
    margin-left: 2.5%;
    margin-top: 5%;
    height: 50px;
    padding-top: 6px;
}
.day-title {
    display: flex;
    flex-direction: row;
    margin: 35px 20px 10px;
    p {
        margin: 8px 20px;
        width: calc(100% - 40px);
        text-align: center;
    }
    .button {
        background: #007aff;
        color: white;
        border: none;
    }
}
</style>>