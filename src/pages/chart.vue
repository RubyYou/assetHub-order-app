<template>
  <f7-page data-page="chart">
    <f7-navbar >
      <f7-nav-left back-link="上一頁" sliding></f7-nav-left>
      <f7-nav-center>圖表</f7-nav-center>
    </f7-navbar>
    <f7-block>
      <div ref="temperature" class="tempChart"></div>
      <div ref="timeline" class="timeChart"></div>
    </f7-block>
    </f7-page>
  </div>
</template>

<script>

export default {
  data: function () {

    return {
      temperature: {
          title : {
              text: '未来一周气温变化',
              subtext: '',
              x: 'center',
              align: 'center'
          },
          tooltip : {
              trigger: 'axis'
          },
          legend: {
              data:['最高气温','最低气温'],
              x: 'center',
              y: 'bottom'
          },
          toolbox: {
              show : false,
              feature : {
                  mark : {show: true},
                  dataView : {show: true, readOnly: false},
                  magicType : {show: true, type: ['line', 'bar']},
                  restore : {show: true},
                  saveAsImage : {show: true}
              }
          },
          calculable : true,
          xAxis : [
              {
                  type : 'category',
                  boundaryGap : false,
                  data : ['周一','周二','周三','周四','周五','周六','周日']
              }
          ],
          yAxis : [
              {
                  type : 'value',
                  axisLabel : {
                      formatter: '{value} °C'
                  }
              }
          ],
          series : [
              {
                  name:'最高气温',
                  type:'line',
                  data:[11, 11, 15, 13, 12, 13, 10],
                  markPoint : {
                      data : [
                          {type : 'max', name: '最大值'},
                          {type : 'min', name: '最小值'}
                      ]
                  },
                  markLine : {
                      data : [
                          {type : 'average', name: '平均值'}
                      ]
                  }
              },
              {
                  name:'最低气温',
                  type:'line',
                  data:[1, -2, 2, 5, 3, 2, 0],
                  markPoint : {
                      data : [
                          {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
                      ]
                  },
                  markLine : {
                      data : [
                          {type : 'average', name : '平均值'}
                      ]
                  }
              }
          ]
      },
      timeline: {
          title : {
              text : '时间坐标折线图',
              subtext : 'dataZoom支持',
              x: 'center',
              align: 'center'
          },
          tooltip : {
              trigger: 'item',
              formatter : function (params) {
                  var date = new Date(params.value[0]);
                  data = date.getFullYear() + '-'
                        + (date.getMonth() + 1) + '-'
                        + date.getDate() + ' '
                        + date.getHours() + ':'
                        + date.getMinutes();
                  return data + '<br/>'
                        + params.value[1] + ', ' 
                        + params.value[2];
              }
          },
          toolbox: {
              show : false,
              feature : {
                  mark : {show: true},
                  dataView : {show: true, readOnly: false},
                  restore : {show: true},
                  saveAsImage : {show: true}
              }
          },
          dataZoom: {
              show: true,
              start : 70
          },
          legend : {
              data : ['series1'],
              x: 70,
              y: 10
          },
          grid: {
              y2: 80
          },
          xAxis : [
              {
                  type : 'time',
                  splitNumber:10
              }
          ],
          yAxis : [
              {
                  type : 'value'
              }
          ],
          series : [
              {
                  name: 'series1',
                  type: 'line',
                  showAllSymbol: true,
                  symbolSize: function (value){
                      return Math.round(value[2]/30) + 2;
                  },
                  data: (function () {
                      var d = [];
                      var len = 0;
                      var now = new Date();
                      var value;
                      while (len++ < 200) {
                          d.push([
                              new Date(2014, 9, 1, 0, len * 10000),
                              (Math.random()*30).toFixed(2) - 0,
                              (Math.random()*100).toFixed(2) - 0
                          ]);
                      }
                      return d;
                  })()
              }
          ]
      }
    }
  },
  computed: {

  },
  methods: {
    setChartSize (element) {
      const width = window.innerWidth * 1.15;
      const height = parseInt (width * 0.7);
      element.style.width = width + 'px';
      element.style.height = height + 'px';
    }
  },
  mounted () {
    const tempChart = this.$refs.temperature;
    const timeChart = this.$refs.timeline;
    this.setChartSize (tempChart);
    this.setChartSize (timeChart);

      this.tempChart = echarts.init (tempChart);
      this.tempChart.setOption (this.temperature);
      this.timeChart = echarts.init (timeChart);
      this.timeChart.setOption (this.timeline);
  }
}
</script>
<style>
.tempChart, .timeChart {
    margin-left: -40px;
    margin-bottom: 30px;
}
</style>