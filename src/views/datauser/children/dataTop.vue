<template>
   <div class="dataTop">
       <el-card shadow="never">
          <el-row>
            <el-col :span="10">
              <div class="dataTitle">
                <i class="el-icon-s-data"></i> <span>用户数据分析</span>
              </div>
            </el-col>

            <el-col :span="6" :offset="8">
              <el-date-picker
                style="width:100%"
                v-model="myDateVal"
                type="daterange"
                value-format="timestamp"
                align="right"
                unlink-panels
                range-separator="~"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                @change="dateChange"
                :picker-options="pickerOptions"
                >
              </el-date-picker>

            </el-col>
          </el-row>
     </el-card>
   </div>
</template>

<script>
export default {
  data () {
    return {
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      myDateVal: ''
    }
  },
  methods: {
    dateChange (val) {
      this.$emit('timeFrame', val)
    }
  }
}
</script>

<style lang="less" scoped>

.dataTitle{
  font-size:28px;
  color:#409EFF;
  span{
    padding-left:10px;
  }
}
</style>
