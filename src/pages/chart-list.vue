<template>
  <f7-page data-page="chart-list">
    <f7-navbar >
      <f7-nav-left back-link="上一頁" sliding></f7-nav-left>
      <f7-nav-center>災害監測</f7-nav-center>
    </f7-navbar>
    <f7-block>
        <f7-buttons>
            <f7-button @click="updateChart('waterPressure')">水壓計</f7-button>
            <f7-button @click="updateChart('crackMeasure')">裂縫計</f7-button>
            <f7-button @click="updateChart('rainAmount')">雨量流量</f7-button>
        </f7-buttons>
        <br/>
        <f7-buttons>
            <f7-button @click="updateChart('sliperMeasure')"> 地滑計</f7-button>
            <f7-button @click="updateChart('tiltMater')"> 傾度計</f7-button>
            <f7-button @click="updateChart('waterLevel')"> 水位觀測井</f7-button>
        </f7-buttons>
        <br /> <br />
        <Chart :chartData="chartData" ></Chart>
    </f7-block>
    </f7-page>
  </div>
</template>

<script>
import Chart from '../components/chart.vue';
import { waterPressure, crackMeasure, rainAmount, 
        sliperMeasure, tiltMeter, waterLevel, bodyTempature } from '../utils/data';

export default {
  components: {
    Chart
  },
  data: function () {
    return {
        chartData: waterPressure,
        dataMap : {
            'waterPressure' : waterPressure,
            'crackMeasure' : crackMeasure,
            'rainAmount' : rainAmount,
            'sliperMeasure' : sliperMeasure,
            'tiltMater' : tiltMeter,
            'waterLevel' : waterLevel,
            'bodyTempature' : bodyTempature
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