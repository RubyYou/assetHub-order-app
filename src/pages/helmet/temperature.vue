<template>
    <Chart v-if="chartData !== null" :chartData="chartData" ></Chart>
    <div v-else class="no-data">
        <p> 無此人溫度數值 </p>
    </div>
</template>

<script>
import Chart from '../../components/chart.vue'
import { mapState } from 'vuex'
import TimeUtils from "../../utils/time-utils"

// currently only used in staff mapping
const today = TimeUtils.substractDayToDBFormate(0);

export default {
    name: 'temperature',
    components: {
        Chart
    },
    props: [
        'temperatures',
        'date'
    ],
    data: function () {
        return {
            chartData : null,
            chartOptions: {
                dataZoom: { show: true, start : 20, end: 80 },
                legend : { data : ['temperature'], textStyle: { fontSize:16 } },
                xAxis : [ { type: 'category', data: []}],
                yAxis : [ { type: 'value', data: [-5, 0, 5, 10]}],
                series : [ { name: 'temperature', type: 'line', showAllSymbol: true, data: []}]
            },
            currentDayIndex : 0
        }
    },
    methods: {
        formateData () {
            if (this.temperatures.length > 0) {
                let temperatures = []
                let time = []
                this.temperatures.map (item => {
                    temperatures.push (item.temperature)
                    const clock = TimeUtils.getClock (item.time)
                    time.push(clock)
                })
                this.chartOptions.series[0].data = temperatures
                this.chartOptions.xAxis[0].data = time
                this.chartData = this.chartOptions
            } else {
                this.chartData = null
            }
        }
    },
    watch: {
        temperatures: {
            handler (after, before) {
                this.formateData () // force it to deep update
            },
            deep: true
        },
        date: {
            handler (after, before) {
                this.formateData () // force it to deep update
            },
            deep: true
        }
    },
    mounted () {
        this.formateData ()
    }
}
</script>
<style lang="scss" scoped>
.no-data {
    text-align: center;
    display: block;
    width: 95%;
    background: gainsboro;
    height: 50px;
    padding-top: 6px;
}
</style>