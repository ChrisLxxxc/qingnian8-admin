<template>
  <div class="alluser">
      <el-card shadow="never" class="homeTop">
          <el-row>
            <el-col :span="10">
              <el-input v-model="myParams.keyword"  placeholder="请输入内容" @change="clickSearch"></el-input>
            </el-col>
            <el-col :span="2">
              <el-button  type="primary" icon="el-icon-search" plain style="width:100%" @click="clickSearch">搜索</el-button>
            </el-col>
          </el-row>
      </el-card>

      <div class="userAllMain">
        <el-table
          stripe
          border
          :data="userData"
          style="width: 100%">

          <el-table-column
            type="index"
            label="编号"
            width="50">
          </el-table-column>

          <el-table-column
            prop="nickname"
            label="姓名"
            width="100">
          </el-table-column>

          <el-table-column
            width="150"
            label="日期">

            <template slot-scope="scope">
              <i class="el-icon-time" style="font-size:12px"></i>
              <span style="margin-left: 5px; font-size:12px; color:#666">{{ myDate(scope.row.posttime) }}</span>
            </template>

          </el-table-column>

          <el-table-column
            prop="contact"
            width="130"
            label="电话">
          </el-table-column>

          <el-table-column
            width="130"
            prop="weixin"
            label="微信">
          </el-table-column>

          <el-table-column
            width="130"
            prop="qq"
            label="QQ">
          </el-table-column>

          <el-table-column
            label="专业">
            <template slot-scope="scope">
              <div class="classname">{{scope.row.infoclass}}</div>
              {{ scope.row.zhuanye }}
            </template>

          </el-table-column>

          <el-table-column
            prop="laiyuan"
            label="信息来源">
          </el-table-column>

          <el-table-column
            prop="dizhi"
            label="地区">
          </el-table-column>

          <el-table-column
            width="100"
            prop="kefu"
            label="客服">
          </el-table-column>

          <el-table-column
            width="130"
            label="操作">
            <template slot-scope="scope">
              <el-tooltip effect="dark" content="修改" placement="top-start">
                <el-button type="primary" icon="el-icon-edit" size="small" @click="clickUpdate(scope.row.id)"></el-button>
              </el-tooltip>

              <el-tooltip effect="dark" content="删除" placement="top-start">
                <el-button type="danger" icon="el-icon-delete" size="small" @click="clickDel(scope.row.id)"></el-button>
              </el-tooltip>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <el-card  shadow="never" class="pages">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-sizes="[20, 50, 100]"
          :page-size="20"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </el-card>

      <updateDialog ref="updateDialog"/>

  </div>
</template>

<script>
import { userAllFun, delUserRow } from '@/network/networks'
import { myDate } from '@/assets/js/common'
import updateDialog from './children/updateDialog'
export default {
  components: {
    updateDialog
  },
  data () {
    return {
      userData: [],
      total: 0,
      myParams: {
        num: 20,
        page: 1,
        keyword: ''
      }
    }
  },
  mounted () {
    this.getAllData()
  },
  methods: {
    // 弹出修改框
    clickUpdate (val) {
      this.$refs.updateDialog.rowid = val
      this.$refs.updateDialog.showDialog = true
    },

    // 点击删除
    clickDel (val) {
      this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'error'
      }).then(res => {
        delUserRow(val).then(res => {
          this.getAllData()
        })
      })
    },

    // 搜索
    clickSearch () {
      this.getAllData()
    },

    // 条数改变的时候
    handleSizeChange (e) {
      console.log(e)
      this.myParams.num = e
      this.getAllData()
    },

    // 页码切换的时候
    handleCurrentChange (e) {
      console.log(e)
      this.myParams.page = e
      this.getAllData()
    },

    // 时间转换
    myDate (time) {
      return myDate(time, 1)
    },

    getAllData () {
      userAllFun(this.myParams).then(res => {
        this.userData = res.data.results
        this.total = res.data.num
        console.log(res)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.userAllMain{ margin-top:30px;}
.classname{
  position: absolute;
  right:0;
  top:0;
  font-size:12px;
  transform: scale(0.9);
  color:#409EFF;
}
.pages{
  margin-top:20px;
  margin-bottom:50px;
  text-align: center;
}
</style>
