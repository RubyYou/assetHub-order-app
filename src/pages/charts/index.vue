<template>
    <f7-page data-page="charts" class="charts-page">
        <f7-navbar>
            <f7-nav-left back-link="上一頁" sliding></f7-nav-left>
            <f7-nav-center>IOT數據</f7-nav-center>
        </f7-navbar>
        <br/> <br/>
        <div v-for="charts in chartList">
            <f7-block-title >
                {{charts.title}}
            </f7-block-title>
            <f7-list>
                <f7-list-item
                    v-for="chart in charts.list"
                    :link="chart.href"
                    :title="chart.title">
                </f7-list-item>
            </f7-list>
        </div>
    </f7-page>
</template>

<script>
// <Chart :chartData="chartData" ></Chart>
// import Chart from '../../components/chart.vue';
// import { waterPressure, crackMeasure, rainAmount,
//         sliperMeasure, tiltMeter, waterLevel, bodyTempature } from '../../utils/data';
import { mapState } from "vuex"

export default {
  computed: mapState({
    chartList: state => state.config.chartList
  }),
  methods: {
    updateChart (name) {
        this.chartData = this.dataMap [name];
    }
  }
}
</script>
<style>

</style>