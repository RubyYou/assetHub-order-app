<template>
    <f7-block>
        <f7-buttons>
            <f7-button @click="updateChart('waterPressure')">睡眠品質</f7-button>
            <f7-button @click="updateChart('crackMeasure')">血糖</f7-button>
            <f7-button @click="updateChart('rainAmount')">血壓</f7-button>
        </f7-buttons>
        <br/>
        <f7-buttons>
            <f7-button @click="updateChart('sliperMeasure')"> 體溫</f7-button>
            <f7-button @click="updateChart('tiltMater')"> 體重</f7-button>
            <f7-button @click="updateChart('waterLevel')"> 脈搏</f7-button>
        </f7-buttons>
        <br /> <br />
        <Chart :chartData="chartData" ></Chart>
    </f7-block>
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