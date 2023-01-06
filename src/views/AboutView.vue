<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div id="main" style="width: 400px; height: 300px"></div>
    <ul class="img">
      <li v-for="(item, index) in imgList" :key="index">
        <img v-lazy="item" alt="" style="width: 768px" />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'homeView',
  data() {
    return {
      imgList: [
        'https://img-pub01.visitshanghai.com.cn/hot-map-1.jpg',
        'https://img-pub01.visitshanghai.com.cn/hot-map-2.jpg',
        'https://img-pub01.visitshanghai.com.cn/hot-map-3.jpg',
        'https://img-pub01.visitshanghai.com.cn/hot-map-4.jpg',
        'https://img-pub01.visitshanghai.com.cn/hot-map-cover.jpg',
        'https://img-pub01.visitshanghai.com.cn/home_bg.png',
        'https://img-pub01.visitshanghai.com.cn/international/picture/3b8f2ae3ece243a9a595dea0390b227b.jpg'
      ]
    };
  },
  mounted() {
    this.myEcharts();
  },
  methods: {
    myEcharts() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('main'));

      // 指定图表的配置项和数据
      let option = {
        animation: false,
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  }
};
</script>
