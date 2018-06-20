<template>
    <Chart v-if="chartData !== null" :chartData="chartData" ></Chart>
    <div v-else class="no-data">
        <p> 無此人傾斜角度數值 </p>
    </div>
</template>
<script>

import Chart from '../../components/chart.vue'
import { mapState } from 'vuex'
import TimeUtils from "../../utils/time-utils"

// currently only used in staff mapping
const today = TimeUtils.substractDayToDBFormate(0);

export default {
    name: 'angle',
    components: {
        Chart
    },
    props: [
        'angles',
        'date'
    ],
    data: function () {
        return {
            chartData : null,
            chartOptions: {
                dataZoom: { show: true, start : 20, end: 80 },
                legend : { data : ['斜角'], textStyle: { fontSize:16 } },
                xAxis : [ { type: 'category', data: []}],
                yAxis : [ { type: 'value', data: [-5, 0, 5, 10]}],
                series : [ { name: '斜角', type: 'line', showAllSymbol: true, data: []}]
            },
            currentDayIndex : 0
        }
    },
    methods: {
        formateData () {
            if (this.angles.length > 0) {
                let angles = []
                let time = []
                this.angles.map (item => {
                    angles.push (item.angle)
                    const clock = TimeUtils.getClock (item.time)
                    time.push(clock)
                })
                this.chartOptions.series[0].data = angles
                this.chartOptions.xAxis[0].data = time
                this.chartData = this.chartOptions
            } else {
                this.chartData = null
            }
        }
    },
    watch: {
        angles: {
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
<style lang="scss">

</style>