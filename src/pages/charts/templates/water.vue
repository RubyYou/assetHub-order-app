<template>
    <f7-page data-page="charts-water" class="charts-page">
        <f7-navbar>
            <f7-nav-left back-link="上一頁" sliding></f7-nav-left>
            <f7-nav-center>水位計</f7-nav-center>
        </f7-navbar>
        <br/><br/>
        <div v-if="warning === true && chartData !== null" class="warning">
            <i class="f7-icons">bolt_round_fill</i> 水位已超過30公分, 請現場人員警戒
        </div>
        <f7-block-title class="day-title">
            <f7-button @click="getSubstrackDayData(1)">
                <
            </f7-button>
            <p>{{date}}</p>
            <f7-button v-if="currentDayIndex > 0" @click="getSubstrackDayData(-1)">
                >
            </f7-button>
        </f7-block-title>
        <Chart v-if="chartData !== null" :chartData="chartData" ></Chart>
        <div v-else class="no-data"> <p>今日還沒有水位數據</p> </div>
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
// 0 is today
let dataType = "";

export default {
    components: {
        Chart
    },
    data: function () {
        return {
            chartData : null,
            date: TimeUtils.getDate(today),
            chartOptions: {
                dataZoom: { show: true, start : 50, end: 60 },
                legend : { data : ['水位 - cm'] },
                grid: { y2: 120 },
                xAxis : [ { type: 'category', data: []}],
                yAxis : [ { type: 'value', data: [-5, 0, 5, 10]}],
                series : [ { name: 'water', type: 'line', showAllSymbol: true, data: []}]
            },
            currentDayIndex: 0,
            warning : false
        }
    },
    computed: mapState({
        waterData: state => state.sensor[dataType]
    }),
    methods: {
        getClock (epochDate) {
            var d = new Date (epochDate);
            return d.getHours () + ':' + d.getMinutes () + ':' + d.getSeconds ();
        },
        formateData () {
            if (this.waterData.length > 0) {
                let distance = []
                let time = []
                let warning = false; // set this is incase of looping overlay the value
                this.waterData.map (item => {
                    if (item.distance >= 30) {
                        warning = true
                    }
                    distance.push (item.distance)
                    const clock = this.getClock (item.time)
                    time.push(clock)
                })
                this.warning = warning
                this.chartOptions.series[0].data = distance
                this.chartOptions.xAxis[0].data = time
                this.chartData = this.chartOptions
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
<style lang="sass" scoped>
.button-group {
    margin-left: 5px;
}
.warning {
    background: red;
    width: 100%;
    text-align: center;
    color: white;
    padding: 10px 0;
    margin-top: 5px;
}
</style>