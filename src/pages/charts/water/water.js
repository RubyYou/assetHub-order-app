export const waterFormate = {
    title : {
        text : '水位計',
        align: 'center',
        x: 55
    },
    dataZoom: {
        show: true,
        start : 50,
        end: 60
    },
    legend : {
        data : ['水位']
    },
    grid: {
        y2: 80
    },
    xAxis : [
        {
            type: 'category',
            data: []
        }
    ],
    yAxis : [
        {
            type: 'value',
            data: [-5, 0, 5, 10]
        }
    ],
    series : [
        {
            name: 'water',
            type: 'line',
            showAllSymbol: false,
            data: []
        }
    ]
};