var option = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      animation: false
    }
  },
  legend: {
    data: ["收缩压（高压）", "舒张压（低压）"],
    x: "left"
  },
  // toolbox: { // 右上角工具
  //   feature: {
  //     saveAsImage: {} // 保存蹄片
  //   }
  // },
  axisPointer: {
    link: {
      xAxisIndex: "all"
    }
  },
  dataZoom: [{
    show: true,
    realtime: true,
    start: start,
    end: 100,
    xAxisIndex: [0, 1]
  },
  {
    type: "inside",
    realtime: true,
    start: start,
    end: 100,
    xAxisIndex: [0, 1]
  }
  ],
  grid: [{
    left: 50,
    right: 50,
    height: "35%"
  },
  {
    left: 50,
    right: 50,
    top: "60%",
    height: "35%"
  }
  ],
  xAxis: [{
    type: "category",
    boundaryGap: false,
    axisLine: {
      onZero: true
    },
    data: time
  },
  {
    gridIndex: 1,
    type: "category",
    boundaryGap: false,
    axisLine: {
      onZero: true
    },
    data: time,
    axisLabel: {
      formatter: ''
    },
    position: "top"
  }
  ],
  yAxis: [{
    type: "value",
    max: 160
    // inverse: true // 反向
  },
  {
    gridIndex: 1,
    //   name: "收缩压（低压）", // 纵坐标单位
    type: "value"
  }
  ],
  series: [{
    name: "收缩压（高压）",
    type: "line",
    symbolSize: 8,
    hoverAnimation: false,
    smooth: true,
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
    type: "line",
    xAxisIndex: 1,
    yAxisIndex: 1,
    symbolSize: 8,
    hoverAnimation: false,
    // smooth: true,
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