<template>
  <div class="dataThree" ref="dataThree">

  </div>
</template>

<script>
import { kefuDataNetwork } from '@/network/networks'
var echarts = require('echarts')
export default {
  props: {
    pullTime: Array
  },
  data () {
    return {
      kefu: [],
      num: []
    }
  },
  watch: {
    pullTime () {
      this.getFenBu()
    }
  },
  mounted () {
    this.getFenBu()
  },
  methods: {
    getFenBu () {
      kefuDataNetwork(this.pullTime).then(res => {
        this.kefu = res.data.kefu
        this.num = res.data.num
        this.initEcharts()
      })
    },

    initEcharts () {
      var myChart = echarts.init(this.$refs.dataThree)

      var option = {
        title: {
          text: '客服录入量统计',
          left: 'center'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: [
          {
            type: 'category',
            data: this.kefu,
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: this.num
          }
        ]
      }

      myChart.setOption(option)
    }
  }
}
</script>

<style lang="less" scoped>
.dataThree{
    width:100%;
    height: 600px;
}
</style>
