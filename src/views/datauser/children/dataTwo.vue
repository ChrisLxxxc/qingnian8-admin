<template>
  <div class="dataTwo" ref="dataTwo">

  </div>
</template>

<script>
import { fenbuNetwork } from '@/network/networks'
var echarts = require('echarts')
export default {
  props: {
    pullTime: Array
  },
  data () {
    return {
      infoclass: [],
      list: []
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
      fenbuNetwork(this.pullTime).then(res => {
        this.infoclass = res.data.infoclass
        this.list = res.data.list
        this.initEcharts()
      })
    },

    initEcharts () {
      var myChart = echarts.init(this.$refs.dataTwo)
      var option = {
        title: {
          text: '咨询专业分布',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          bottom: 0,
          left: 'center',
          data: this.infoclass
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '60%',
            center: ['50%', '50%'],
            data: this.list,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      myChart.setOption(option)
    }
  }
}
</script>

<style lang="less" scoped>
.dataTwo{
    width:100%;
    height: 600px;
}
</style>
