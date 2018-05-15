<template>
    <f7-page data-page="charts-water" class="charts-page">
        <f7-navbar>
            <f7-nav-left back-link="上一頁" sliding></f7-nav-left>
            <f7-nav-center>{{dataType}} 氣體監測</f7-nav-center>
        </f7-navbar>
        <br/><br/>
        <f7-block-title class="day-title">
            <f7-button @click="getSubstrackDayData(1)"> < </f7-button>
            <p>{{date}}</p>
            <f7-button @click="getSubstrackDayData(-1)"> > </f7-button>
        </f7-block-title>
        <Chart v-if="chartData !== null" :chartData="chartData" ></Chart>
        <div v-else class="no-data"> <p>今日沒有 {{dataType}} 氣體數據</p> </div>
    </f7-page>
</template>

<script>
import Chart from '../../../components/chart.vue'
import { mapState } from 'vuex'
import TimeUtils from "../../../utils/time-utils"
import store from '../../../store/index'
import { SensorAPI } from '../../../apis/'

// currently only used in staff mapping
// const today = TimeUtils.substractDayToDBFormate(0);

// 0 is today
let dataType = "";
let unit = ""

export default {
    components: {
        Chart
    },
    data: function () {
        return {
            dataType: null,
            chartData : null,
            date: TimeUtils.getDate(this.gasCurrentDate),
            chartOptions: {
                dataZoom: { show: true, start : 50, end: 60 },
                legend : { data : [ dataType + ' - ' + unit ] },
                grid: { y2: 120 },
                xAxis : [{type: 'category', data: []}],
                yAxis : [{type: 'value', data: [-5, 0, 5, 10]}],
                series : [{name: 'gas', type: 'line', showAllSymbol: true, data: []}]
            },
            currentDayIndex: 0,
            warning : false
        }
    },
    computed: mapState({
        gasData: state => state.sensor[dataType],
        unit: state => state.config.chartInfo.gasB.unit[dataType],
        gasCurrentDate: state => state.sensor.gasCurrentDate
    }),
    methods: {
        getClock (epochDate) {
            var d = new Date (epochDate);
            return d.getHours () + ':' + d.getMinutes () + ':' + d.getSeconds ();
        },
        formateData () {
            unit = this.unit
            if (this.gasData.length > 0) {
                let values = []
                let time = []
                let warning = false // set this is incase of looping overlay the value

                this.gasData.map (item => {
                    values.push (item.value)
                    const clock = this.getClock (item.createTime)
                    time.push (clock)
                })

                this.warning = warning
                this.chartOptions.series[0].data = values
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
        this.dataType = dataType
        unit = this.unit
        console.log (this.gasCurrentDate, unit)
        this.formateData ()
    }
}

</script>
<style lang="sass" scoped>

</style>