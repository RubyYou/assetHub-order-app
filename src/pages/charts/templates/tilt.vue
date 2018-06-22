<template>
    <f7-page data-page="charts-water" class="charts-page">
        <f7-navbar>
            <f7-nav-left back-link="上一頁" sliding></f7-nav-left>
            <f7-nav-center>傾斜儀</f7-nav-center>
        </f7-navbar>
        <br/><br/>
        <f7-block-title class="day-title">
            <f7-button @click="getSubstrackDayData(1)">
                <
            </f7-button>
            <p>{{date}}</p>
            <f7-button v-if="currentDayIndex > 0" @click="getSubstrackDayData(-1)">
                >
            </f7-button>
        </f7-block-title>
        <div class="chart-wrapper" v-if="chartDataX !== null && chartDataY !== null">
            <Chart :chartData="chartDataX" ></Chart>
            <br/><br/>
            <Chart :chartData="chartDataY" ></Chart>
            <br/>
            <p class="yellow">傾斜達0.5度時為行動值，工區需進行撤離。</p>
            <p class="red">傾斜達1度時為警戒值，進行封橋動作。</p>
        </div>
        <div v-else class="no-data"> <p>今日沒有傾斜儀數據</p> </div>
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
            date: TimeUtils.getDate(today),
            chartDataX : null,
            chartDataY : null,
            chartOptionsX: {
                dataZoom: { show: true, start: 30, end: 70},
                legend : { data : [ '傾斜角 - x°'], textStyle: { fontSize:16 }},
                grid: { y2: 80 },
                xAxis : [ { type: 'category', data: []}],
                yAxis : [ { type: 'value', max: 2, min: -2}],
                series : [
                    { name: '傾斜角 - x°', type: 'line', showAllSymbol: true, data: []}
                ]
            },
            chartOptionsY: {
                dataZoom: { show: true, start: 30, end: 70},
                legend : { data : [ '傾斜角 - y°'], textStyle: { fontSize:16 }},
                grid: { y2: 80 },
                xAxis : [ { type: 'category', data: []}],
                yAxis : [ { type: 'value', max: 2, min: -2}],
                series : [
                    { name: '傾斜角 - y°', type: 'line', showAllSymbol: true, data: []},
                ]
            },
            currentDayIndex: 0,
            warning : false
        }

    },
    computed: mapState({
        tiltData: state => state.sensor[dataType]
    }),
    methods: {
        getClock (epochDate) {
            var d = new Date (epochDate);
            let min =  d.getMinutes () < 10 ? "0" + d.getMinutes () : d.getMinutes ()
            let sec = d.getSeconds () < 10 ? "0" + d.getSeconds () : d.getSeconds ()
            return d.getHours () + ':' + min + ':' + sec;
        },
        formateData () {
            if (this.tiltData.length > 0) {
                let x = []
                let y = []
                let time = []
                let warning = false; // set this is incase of looping overlay the value
                let averageX = this.getAverage(this.tiltData, 'x')
                let averageY = this.getAverage(this.tiltData, 'y')
                this.tiltData.map (item => {
                    item.x && (item.x >= 1.2) && (warning = true)
                    item.y && (item.y >= 1.2) && (warning = true)
                    item.x && x.push (item.x) && y.push (averageY)
                    item.y && y.push (item.y) && x.push (averageX)

                    const clock = this.getClock (item.time)
                    time.push(clock)
                })
                this.warning = warning
                this.chartOptionsX.series[0].data = x
                this.chartOptionsY.series[0].data = y
                this.chartOptionsX.xAxis[0].data = time
                this.chartOptionsY.xAxis[0].data = time
                this.chartDataX = this.chartOptionsX
                this.chartDataY = this.chartOptionsY
            } else {
                this.chartDataX = null
                this.chartDataY = null
            }
        },
        getAverage (dataSet, childName) {
            let valueAdd = 0
            let validItem = []
            dataSet.map ( item => {
                if (item[childName]) {
                    valueAdd += item[childName]
                    validItem.push(item[childName])
                }
            })
            return valueAdd / validItem.length
        },
        getSubstrackDayData (substrackNumber) {
            console.assert (typeof substrackNumber === "number")
            const finalNumber = this.currentDayIndex + substrackNumber
            const fetchDate = TimeUtils.substractDayToDBFormate (finalNumber);
            this.setCurrentDate(finalNumber)

            const payload = {
                type: dataType,
                date: fetchDate,
                callBack : this.formateData
            }
            this.$store.dispatch ("getSensorData", payload);
            this.date = TimeUtils.getDate(fetchDate)
        },
        setCurrentDate(number) {
            this.currentDayIndex = number
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
.chart-wrapper {
    min-height: 900px;
    //margin-bottom: 200px;
}
.yellow {
    text-align:center;
    color:#ffa900;
    //margin-top: -300px;
}
.red {
    text-align:center;
    color:red;
}
</style>