<template>
  <div class="datauser">
      <dataTop @timeFrame="timeFrame"/>

      <div class="dataUserMain">
        <el-card  shadow="never">
          <el-row :gutter="20">
            <el-col :span="8">
                <dataOne :pullTime="pullTime"/>
            </el-col>
            <el-col :span="8">
                <dataTwo :pullTime="pullTime"/>
            </el-col>
            <el-col :span="8">
                <dataThree :pullTime="pullTime"/>
            </el-col>
          </el-row>
          <div style="height:80px"></div>
          <el-row>
            <el-col :span="24">
              <dataFour/>
            </el-col>
          </el-row>
        </el-card>

      </div>
  </div>
</template>

<script>
import dataTop from './children/dataTop'
import dataOne from './children/dataOne'
import dataTwo from './children/dataTwo'
import dataThree from './children/dataThree'
import dataFour from './children/dataFour'
export default {
  data () {
    return {
      pullTime: []
    }
  },
  methods: {
    timeFrame (val) {
      this.pullTime = val
    }
  },
  components: {
    dataTop,
    dataOne,
    dataTwo,
    dataThree,
    dataFour
  }
}
</script>

<style lang="less" scoped>
.dataUserMain{
  margin-top:30px;
}

</style>
