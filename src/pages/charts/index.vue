<template>
    <f7-page data-page="charts" class="charts-page">
        <f7-navbar>
            <f7-nav-left back-link="上一頁" sliding></f7-nav-left>
            <f7-nav-center>IOT數據</f7-nav-center>
        </f7-navbar>
        <br/> <br/>
        <f7-block-title>重量觀測</f7-block-title>
        <f7-list>
            <f7-list-item
                v-for="chart in chartList.weight"
                :link="chart.href"
                :title="chart.title">
            </f7-list-item>
        </f7-list>

        <f7-block-title>氣體觀測</f7-block-title>
        <f7-list>
            <f7-list-item
                v-for="chart in chartList.gas"
                :link="chart.href"
                :title="chart.title">
            </f7-list-item>
        </f7-list>

        <f7-block-title>傾斜觀測 (手動輸入)</f7-block-title>
        <f7-list>
            <f7-list-item
                v-for="chart in chartList.slide"
                :link="chart.href"
                :title="chart.title">
            </f7-list-item>
        </f7-list>
    </f7-page>
</template>

<script>
//<Chart :chartData="chartData" ></Chart>
import Chart from '../../components/chart.vue';
// import { waterPressure, crackMeasure, rainAmount,
//         sliperMeasure, tiltMeter, waterLevel, bodyTempature } from '../../utils/data';

export default {
//   components: {
//     Chart
//   },
  data: function () {
    return {
        // chartData: waterPressure,
        // dataMap : {
        //     'waterPressure' : waterPressure,
        //     'crackMeasure' : crackMeasure,
        //     'rainAmount' : rainAmount,
        //     'sliperMeasure' : sliperMeasure,
        //     'tiltMater' : tiltMeter,
        //     'waterLevel' : waterLevel,
        //     'bodyTempature' : bodyTempature
        // },
        chartList : {
            'weight' : [
                { title: '拉力計', href: '/charts/weight' }, // all not implemented
            ],
            'gas': [
                { title: '可燃氣體', href: '/charts/combustible' },
                { title: '一氧化碳', href: '/charts/co' },
                { title: '硫化氫', href: '/charts/h2s' },
                { title: '氧氣', href: '/charts/o2' }
            ],
            // insert this to the form db
            'slide' : [
                { title: '傾斜觀測管', href: '/forms/standard/SlideChartFormA' },
                { title: '傾度儀', href: '/forms/standardSections/SlideChartFormB' },
            ]
        }
    }
  },
  methods: {
    updateChart (name) {
        this.chartData = this.dataMap [name];
    }
  }
}
</script>
<style>

</style>