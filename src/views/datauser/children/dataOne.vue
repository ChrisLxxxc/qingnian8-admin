<template>
    <div class="dataOne" ref="dataOne" style="width:100%;height:600px">

    </div>
</template>

<script>
import { paiMingNetwork } from '@/network/networks'
var echarts = require('echarts')

export default {
  props: {
    pullTime: Array
  },
  watch: {
    pullTime (val) {
      this.getPaiMing()
    }
  },

  data () {
    return {
      kefuArr: [],
      dateM: [],
      zong: []
    }
  },
  mounted () {
    this.getPaiMing()
  },
  methods: {
    getPaiMing () {
      paiMingNetwork(this.pullTime).then(res => {
        this.kefuArr = res.data.kefu
        this.dateM = res.data.dateM
        this.zong = res.data.zong
        this.initEcharts()
      })
    },

    initEcharts () {
      var myChart = echarts.init(this.$refs.dataOne)
      var option = {
        title: {
          text: '最近排名趋势',
          left: 'center'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: this.kefuArr,
          left: 'center',
          bottom: 0
        },
        grid: {
          left: '1%',
          right: '1%',
          bottom: '6%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.dateM
        },
        yAxis: {
          type: 'value'
        },
        series: this.zong
      }
      myChart.setOption(option)
    }

  }

}
</script>

<style lang="less" scoped>

</style>
