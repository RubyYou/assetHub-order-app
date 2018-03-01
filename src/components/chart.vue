<template>
    <div>
        <div ref="chart" class="chart"></div>
    </div>
</template>


<script>
export default {
    props: [
        'chartData'
    ],
    data : function () {
        return {
            message: 'hello'
        }
    },
    methods: {
        setChartSize (element) {
            const width = window.innerWidth * 1.15;
            const height = parseInt (width * 0.7);
            element.style.width = width + 'px';
            element.style.height = height + 'px';
        },
        dataUpdate () {

            if (this.chartContent) {
                this.chartContent.dispose ();
            }

            this.chartContent = echarts.init (this.$refs.chart);
            this.chartContent.setOption (this.chartData);
        }
    },
    watch: {
        chartData () {
            this.dataUpdate ();
        }
    },
    mounted () {
        this.setChartSize (this.$refs.chart);
        this.dataUpdate();
    }
}
</script>

<style >
.chart {
    margin-left: -40px;
    margin-bottom: 30px;
}

</style>