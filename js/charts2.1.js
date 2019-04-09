option = {
    tooltip: {
        trigger: "axis",
        axisPointer: {
            animation: false
        }
    },
    grid: {
        left: 50,
        right: 50,
        bottom: 80
    },
    // toolbox: {
    //     feature: {
    //         saveAsImage: {}
    //     }
    // },
    legend: {
        data: ["收缩压（高压）", "舒张压（低压）"],
        x: 'left'
    },
    dataZoom: [{
        show: true,
        realtime: true,
        start: start,
        end: 100
    },
    {
        type: 'inside',
        realtime: true,
        start: start,
        end: 100
    }
    ],
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            onZero: false
        },
        data: time,
    }],
    yAxis: [{
        type: 'value',
        max: 160
    },
    {
        type: 'value',
        max: 160
    }
    ],
    series: [{
        name: "收缩压（高压）",
        type: 'line',
        animation: false,
        // smooth: true,
        color: ['#f9c501'],
        lineStyle: {
            width: 1
        },
        data: sp,
        markLine: {
            data: [
                { name: '上限值', yAxis: 140, itemStyle: { color: 'red' } },
                { name: '下限值', yAxis: 90, itemStyle: { color: 'blue' } },
            ]
        },
    },
    {
        name: "舒张压（低压）",
        type: 'line',
        yAxisIndex: 1,
        animation: false,
        // smooth: true,
        color: ['#00ff00'],
        lineStyle: {
            width: 1
        },
        data: dp,
        markLine: {
            data: [
                { name: '上限值', yAxis: 90, itemStyle: { color: 'red' } },
                { name: '下限值', yAxis: 60, itemStyle: { color: 'blue' } },
            ]
        },
    }
    ]
};

echarts.init(document.getElementById("view2")).setOption(option);