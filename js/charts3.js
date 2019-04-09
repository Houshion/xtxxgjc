var option = {
  title: {
    text: "脉搏",
    subtext: "",
    x: "center"
  },
  xAxis: {
    type: 'category',
    data: time,
    boundaryGap: false,
    axisLine: {
      onZero: true
    },
  },
  yAxis: {
    type: 'value',
    max: 150
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      animation: false
    }
  },
  legend: {
    data: ["脉搏"],
    x: "left"
  },
  // toolbox: {
  //   feature: {
  //     saveAsImage: {}
  //   }
  // },
  axisPointer: {
    link: {
      xAxisIndex: "all"
    }
  },
  dataZoom: [{
    start: start,
    end: 100,
  }],
  grid: [{
    top: 30,
    bottom: 60
  }],
  series: [
    //   {
    //   // name: '遮挡区域，作为背景',
    //   type: 'line',
    //   animation: false,
    //   areaStyle: {
    //     normal: {}
    //   },
    //   lineStyle: {
    //     normal: {
    //       width: 1
    //     }
    //   },
    //   color: ['#00ff00'],
    //   markArea: {
    //     data: [
    //       [{
    //         yAxis: '0'
    //       }, {
    //         yAxis: '600'
    //       }]
    //     ]
    //   },
    // }, 
    {
      name: "脉搏",
      symbolSize: 8,
      hoverAnimation: false,
      data: pulse,
      markLine: {
        data: [
          { name: '上限值', yAxis: 100, itemStyle: { color: 'red' } },
          { name: '下限值', yAxis: 60, itemStyle: { color: 'blue' } },
        ]
      },
      type: 'line',
      // smooth: true
    }
  ]
};


echarts.init(document.getElementById("view3")).setOption(option);