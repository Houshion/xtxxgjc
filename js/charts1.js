console.log(start)
var option = {
  // xAxis: {
  //   type: 'category',
  //   data: time,
  //   axisLine: {
  //     onZero: true
  //   },
  //   boundaryGap: false,
  // },
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
  // yAxis: {
  //   type: 'value',
  // },
  yAxis: [{
    type: "value",
    max: 50
    // inverse: true // 反向
  },
  {
    gridIndex: 1,
    type: "value"
  }
  ],
  tooltip: {
    trigger: "axis",
    axisPointer: {
      animation: false
    }
  },
  legend: {
    data: ["动脉脉搏波速率指数(AVI)", "动脉压力容积指数(API)"],
    x: "left"
  },
  axisPointer: {
    link: {
      xAxisIndex: "all"
    }
  },
  // dataZoom: [{
  //   start: start,
  //   end: 100,
  // }],
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
  // grid: [{
  //   top: 50,
  //   bottom: 60
  // }],
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
  series: [
    {
      name: "动脉脉搏波速率指数(AVI)",
      symbolSize: 8,
      xAxisIndex: 1,
      yAxisIndex: 1,
      hoverAnimation: false,
      smooth: true,
      data: avi,
      markLine: {
        data: [
          { name: '上限值', yAxis: 9.5, itemStyle: { color: 'red' } },
        ]
      },
      color: ['#7101e8'],
      type: 'line'
    }, {
      name: "动脉压力容积指数(API)",
      symbolSize: 8,
      hoverAnimation: false,
      // smooth: true,
      data: api,
      markLine: {
        data: [
          { name: '上限值', yAxis: 9.5, itemStyle: { color: 'red' } },
        ]
      },
      color: ['#2b9cff'],
      type: 'line'
    },
  ]
};


echarts.init(document.getElementById("view1")).setOption(option);