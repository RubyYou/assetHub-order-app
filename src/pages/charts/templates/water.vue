<template>
    <f7-page data-page="charts-water" class="charts-page">
        <f7-navbar>
            <f7-nav-left back-link="上一頁" sliding></f7-nav-left>
            <f7-nav-center>水位計</f7-nav-center>
        </f7-navbar>
        <br/><br/>
        <div :class="[{active: warning}, 'warning']">
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
        <div v-else class="no-data"> <p>今日沒有水位數據</p> </div>
        <div v-if="addInfo !== null" class="water-info" v-html="addInfo">
        </div>
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
            onehour: 1 * 60 * 60 * 1000,
            limit: 30,
            chartData : null,
            date: TimeUtils.getDate(today),
            chartOptions: {
                dataZoom: { show: true, start : 50, end: 60 },
                legend : { data : ['水位 - cm'], textStyle: { fontSize:16 }},
                grid: { y2: 80 },
                xAxis : [ { type: 'category', data: []}],
                yAxis : [ { type: 'value', data: [-5, 0, 5, 10]}],
                series : [ { name: '水位 - cm', type: 'line', showAllSymbol: true, data: []}]
            },
            currentDayIndex: 0,
            warning : false
        }
    },
    computed: mapState({
        waterData: state => state.sensor[dataType],
        addInfo: state => state.config.chartInfo[dataType].addInfo || null
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
                let warningData = []
                let now = new Date().getTime()
                this.waterData.map (item => {
                    if (item.time >= now) { return }
                    if (item.distance >= this.limit) {
                        warningData.push (item)
                    }
                    distance.push (item.distance)
                    const clock = this.getClock (item.time)
                    time.push(clock)
                })

                let alertInfo = warningData.filter(item => {
                    return (now - item.time) < this.onehour
                })

                if (alertInfo.length > 0) { this.startAlert () }
                this.chartOptions.series[0].data = distance
                this.chartOptions.xAxis[0].data = time
                this.chartData = this.chartOptions
            } else {
                this.chartData = null
            }
        },
        startAlert () {
            const twoMins = 1000 * 12
            this.warning = true

            // cancel after 2 min
            setTimeout(() => {
                if (this.warning) this.warning = false
            }, twoMins)
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
    width: 100%;
    text-align: center;
    color: white;
    height: 0;
    opacity: 0;
    -webkit-transition: all .5s; /* Safari */
    transition: all .5s;

    &.active {
        opacity: 1;
        background: red;
        padding: 10px 0;
        margin-top: 5px;
        height: 28px
    }
}
.water-info {
    text-align:center;
    margin: 0 auto;
    width: 90%;
    line-height: 25px;
    h5 {
        margin: 0;
    }
}

</style>