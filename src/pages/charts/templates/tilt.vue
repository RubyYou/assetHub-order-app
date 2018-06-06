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
        <Chart v-if="chartData !== null" :chartData="chartData" ></Chart>
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
            chartData : null,
            date: TimeUtils.getDate(today),
            chartOptions: {
                dataZoom: { show: true, start: 30, end: 70},
                legend : { data : [ '傾斜角 - x°',  '傾斜角 - y°'] },
                 grid: { y2: 120 },
                xAxis : [ { type: 'category', data: []}],
                yAxis : [ { type: 'value', max: 20, min: -20}],
                series : [
                    { name: '傾斜角 - x°', type: 'line', showAllSymbol: true, data: []},
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
                    item.x && (item.x >= 5) && (warning = true)
                    item.y && (item.y >= 5) && (warning = true)
                    item.x && x.push (item.x) && y.push (averageY)
                    item.y && y.push (item.y) && x.push (averageX)

                    const clock = this.getClock (item.time)
                    time.push(clock)
                })
                this.warning = warning
                this.chartOptions.series[0].data = x
                this.chartOptions.series[1].data = y
                this.chartOptions.xAxis[0].data = time
                this.chartData = this.chartOptions
            } else {
                this.chartData = null
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
</style>