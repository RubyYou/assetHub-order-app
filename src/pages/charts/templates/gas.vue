<template>
    <f7-page data-page="charts-water" class="charts-page">
        <f7-navbar>
            <f7-nav-left back-link="上一頁" sliding></f7-nav-left>
            <f7-nav-center>{{dataType}} 氣體監測</f7-nav-center>
        </f7-navbar>
        <br/><br/>
        <div v-if="warning === true" class="warning">
            <i class="f7-icons">bolt_round_fill</i> 氣體數據不正常，麻煩請現場人員檢查設備
        </div>
        <f7-block-title class="day-title">
            <f7-button @click="getSubstrackDayData(1)"> < </f7-button>
            <p>{{date}}</p>
            <f7-button v-if="currentDayIndex > 0" @click="getSubstrackDayData(-1)"> > </f7-button>
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
let collection = ""
let dataType = ""
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
                legend : { data : [ dataType + ' - ' + unit ], textStyle: { fontSize:16 } },
                grid: { y2: 120 },
                xAxis : [{type: 'category', data: []}],
                yAxis : [{type: 'value', data: [-5, 0, 5, 10]}],
                series : [{name: dataType + ' - ' + unit, type: 'line', showAllSymbol: true, data: []}]
            },
            currentDayIndex: 0,
            warning : false
        }
    },
    computed: mapState({
        gasData: state => state.sensor[collection][dataType],
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

                this.gasData.map (item => {

                    // add exception
                    if (item.value == "" || isNaN (item.value)) {
                        return
                    }

                    if (parseFloat(item.value) > 30 ) {
                        this.warning = true
                    }

                    values.push (parseFloat(item.value))
                    const clock = this.getClock (item.createTime)
                    time.push (clock)
                })

                if (values.length > 0) {
                    this.chartOptions.series[0].data = values
                    this.chartOptions.xAxis[0].data = time
                    this.chartData = this.chartOptions
                } else {
                    this.chartData = null
                }
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
                type: collection,
                date: fetchDate,
                callBack : this.formateData
            }
            this.warning = false
            this.$store.dispatch ("getSensorData", payload);
            this.date = TimeUtils.getDate(fetchDate)
        }
    },
    beforeCreate () {
        console.assert (this.$route.params.collection && this.$route.query.data)
        collection = this.$route.params.collection
        dataType = this.$route.query.data
    },
    mounted () {
        this.dataType = dataType
        this.collection = collection
        unit = this.unit
        this.formateData ()
    }
}

</script>
<style lang="sass" scoped>
.warning {
    background: red;
    width: 100%;
    text-align: center;
    color: white;
    padding: 10px 0;
    margin-top: 5px;
}
</style>